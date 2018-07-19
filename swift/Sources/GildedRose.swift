
public class GildedRose {
    var items:[Item]
    
    required public init(items:[Item]) {
        self.items = items
    }
    
    public func updateQuality() {
        for item in items {
            if let itemQuality = Item.itemQualityModifier(item: item) {
                itemQuality.update()
            }
        }
    }
}
