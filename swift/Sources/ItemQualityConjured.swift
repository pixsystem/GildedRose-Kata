//
//  ItemQualityConjured.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//"Conjured" items degrade in Quality twice as fast as normal items

class ItemQualityConjured : ItemQuality {
    
    override func updateQuality() {
        guard let item = item else {
            return
        }
        
        defer {
            limitQuality(min: 0)
        }
        
        if isExpired() {
            item.quality = item.quality - 2
            return
        }
        
        item.quality = item.quality - 1
    }
    
}
