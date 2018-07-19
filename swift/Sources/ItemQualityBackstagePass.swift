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
    
    override func updateQuality() {
        guard let item = item else {
            return
        }
        
        defer {
            limitQuality(min: 0)
            limitQuality(max: 50)
        }
        
        if isExpired() {
            item.quality = 0
            return
        }
        
        if item.sellIn <= 5 {
            item.quality = item.quality + 3
            return
        }
        
        if item.sellIn <= 10 {
            item.quality = item.quality + 2
            return
        }
        
        item.quality = item.quality + 1
        
    }
    
}
