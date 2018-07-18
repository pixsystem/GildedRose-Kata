//
//  ItemQualityBackstagePass.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
//  Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
//  Quality drops to 0 after the concert

class ItemQualityBackstagePass : ItemQuality {
    
    override init(item: Item) {
        super.init(item: item)
        qualityModifier = 1
        defaultQualityDecreaseWhenExpired = false
    }
    
    override func update() {
        guard let item = item else {
            return
        }
        if item.sellIn <= 10 {
            qualityModifier = 2
        }
        if item.sellIn <= 5 {
            qualityModifier = 3
        }
        if item.sellIn <= 0 {
            qualityModifier = Int.max
        }
        super.update()
    }
    
}
