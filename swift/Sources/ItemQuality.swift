//
//  ItemValue.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//GildedRose Description:
//All items have a SellIn value which denotes the number of days we have to sell the item
//All items have a Quality value which denotes how valuable the item is
//At the end of each day our system lowers both values for every item

//Default update rules:
//Once the sell by date has passed, Quality degrades twice as fast
//The Quality of an item is never negative
//The Quality of an item is never more than 50

extension Item {
    
    class func itemQualityModifier(item:Item) -> ItemQuality? {
        //Obviously a very contrived example, probably would be beneficial for some more rules here..
        
        let lowered = item.name.lowercased()
        
        if lowered.contains("backstage") {
            return ItemQualityBackstagePass.init(item: item)
        }
        
        else if lowered.contains("conjured") {
            return ItemQualityConjured.init(item: item)
        }
        
        else if lowered.contains("aged brie") {
            return ItemQualityAgedBrie.init(item: item)
        }
        
        else if lowered.contains("sulfuras") {
            return ItemQualitySulfuras.init(item: item)
        }
        
        return ItemQuality.init(item: item)
    }
    
}

class ItemQuality {
    
    var item:Item?
    let minQuality:Int = 0
    let maxQuality:Int = 50
    let minSellIn = 0
    var sellInModifier:Int = -1
    var sellInModifierWhenExpired = 0
    var qualityModifier:Int = -1
    let qualityModifierWhenExpired:Int = -2
    var defaultQualityDecreaseWhenExpired = true
    
    init(item:Item) {
        self.item = item
    }
    
    func update() {
        guard let item = item else {
            return
        }
        
        //Once the sell by date has passed, Quality degrades twice as fast
        if item.sellIn < minSellIn {
            qualityModifier = qualityModifierWhenExpired
            sellInModifier = sellInModifierWhenExpired
        }
        
        //All items have a SellIn value which denotes the number of days we have to sell the item
        item.sellIn = item.sellIn + sellInModifier
        
        //Check min sell in
        if item.sellIn < minSellIn {
            item.sellIn = sellInModifierWhenExpired
            
            //Default items decrease quality by qualityModifierWhenExpired when expired.
            if defaultQualityDecreaseWhenExpired {
                qualityModifier = qualityModifierWhenExpired
            }
        }
        
        //All items have a Quality value which denotes how valuable the item is
        if qualityModifier < Int.max {
            item.quality = item.quality + qualityModifier
        }
        
        //The Quality of an item is less than minQuality
        if item.quality <= minQuality {
            item.quality = minQuality
        }
        
        //The Quality of an item is never more than maxQuality
        if item.quality >= maxQuality {
            item.quality = maxQuality
        }
        
        //Set the quality to 0.
        if qualityModifier == Int.max {
            item.quality = 0
        }
    }
    
}
