
import XCTest

class GildedRoseTests: XCTestCase {

    //Instead of running all items through the "App", and indexing into a huge array
    //to run test assertions, test each item rule individually.
    
    func testDefaultRules() {
        //after update.
        let item = Item(name: "Foo", sellIn: 15, quality: 2)
        let quality = ItemQuality(item: item)
        
        //Test decrease in quality/sell
        quality.update()
        XCTAssert( item.quality == 1 )
        XCTAssert( item.sellIn == 14 )
        
        //Test decrease in quality/sell
        quality.update()
        XCTAssert( item.quality == 0 )
        XCTAssert( item.sellIn == 13 )
        
        //Test decrease in sell, quality not negative
        quality.update()
        XCTAssert( item.quality == 0 )
        XCTAssert( item.sellIn == 12 )
        
        //Test decrease in sell, quality not negative
        item.sellIn = 0
        quality.update()
        XCTAssert( item.quality == 0 )
        XCTAssert( item.sellIn == 0 )
        
        //test decrease in quality by 2 when sellIn has passed
        item.sellIn = 0
        item.quality = 20
        quality.update()
        XCTAssert( item.sellIn == 0 )
        XCTAssert( item.quality == 18 )
        quality.update()
        XCTAssert( item.sellIn == 0 )
        XCTAssert( item.quality == 16 )
    }

    func testBackstagePassRules() {
        //Backtage pass rules.
        //Increase in quality, decrease sell in.
        //<=10 sell in = 2 increase quality
        //<=3 sell in = 3 increase in quality
        let item = Item(name: "Foo", sellIn: 14, quality: 2)
        let quality = ItemQualityBackstagePass.init(item: item)
        
        quality.update()
        //Test increase quality, decrease sell in
        XCTAssert( item.quality == 3 )
        XCTAssert( item.sellIn == 13 )
        
        quality.update()
        //Test increase quality, decrease sell in
        XCTAssert( item.quality == 4 )
        XCTAssert( item.sellIn == 12 )
        
        //Test max quality, decrease sell in
        item.quality = 50
        item.sellIn = 15
        quality.update()
        XCTAssert( item.quality == 50 )
        XCTAssert( item.sellIn == 14 )
        
        //Check 2+ increase in quality when <= 10 days
        item.sellIn = 9
        item.quality = 4
        quality.update()
        XCTAssert( item.sellIn == 8 )
        XCTAssert( item.quality == 6 )
        
        //Check 3+ increase in quality when <= 3 days
        item.sellIn = 2
        item.quality = 8
        quality.update()
        XCTAssert( item.sellIn == 1 )
        XCTAssert( item.quality == 11 )
        
        //Check 0 quality when  days
        item.sellIn = 0
        item.quality = 8
        quality.update()
        XCTAssert( item.sellIn == 0 )
        XCTAssert( item.quality == 0 )
    }
    
    func testSulfurateRules() {
        //Sulfuras never changes.
        let item = Item(name: "Foo", sellIn: 14, quality: 2)
        let quality = ItemQualitySulfuras.init(item: item)
        quality.update()
        XCTAssert( item.quality == 2 )
        XCTAssert( item.sellIn == 14 )
        quality.update()
        XCTAssert( item.quality == 2 )
        XCTAssert( item.sellIn == 14 )
        quality.update()
        quality.update()
        XCTAssert( item.quality == 2 )
        XCTAssert( item.sellIn == 14 )
    }
    
    func testConjuredRules() {
        //Conjured decreases in quality 2x
        let item = Item(name: "Foo", sellIn: 14, quality: 4)
        let quality = ItemQualityConjured.init(item: item)
        quality.update()
        XCTAssert( item.quality == 2 )
        XCTAssert( item.sellIn == 13 )
        quality.update()
        XCTAssert( item.quality == 0 )
        XCTAssert( item.sellIn == 12 )
    }
    
    func testAgedBrie() {
        //Aged brie increases in quality
        let item = Item(name: "Foo", sellIn: 14, quality: 4)
        let quality = ItemQualityAgedBrie.init(item: item)
        
        //Test increase in quality
        quality.update()
        XCTAssert( item.quality == 5 )
        XCTAssert( item.sellIn == 13 )
        
        //Test increase aagain
        quality.update()
        XCTAssert( item.quality == 6 )
        XCTAssert( item.sellIn == 12 )
        
        //Test max quality
        item.quality = 50
        quality.update()
        XCTAssert( item.quality == 50 )
        XCTAssert( item.sellIn == 11 )
    }
    
    func testItemQualityExtension() {
        var item = Item(name: "Backstage Pass", sellIn: 14, quality: 2)
        XCTAssert( Item.itemQualityModifier(item: item) is ItemQualityBackstagePass)
        
        item = Item(name: "Conjured", sellIn: 14, quality: 2)
        XCTAssert( Item.itemQualityModifier(item: item) is ItemQualityConjured)
        
        item = Item(name: "Aged Brie", sellIn: 14, quality: 2)
        XCTAssert( Item.itemQualityModifier(item: item) is ItemQualityAgedBrie)
        
        item = Item(name: "Sulfuras", sellIn: 14, quality: 2)
        XCTAssert( Item.itemQualityModifier(item: item) is ItemQualitySulfuras)
        
        item = Item(name: "Foo", sellIn: 14, quality: 2)
        XCTAssert( Item.itemQualityModifier(item: item) != nil)
    }
    
    func testApp() {
        let items = [
            Item(name: "foo", sellIn: 0, quality: 0)
        ]
        let app = GildedRose(items: items);
        app.updateQuality();
        XCTAssertEqual("foo", app.items[0].name);
    }
    
}
