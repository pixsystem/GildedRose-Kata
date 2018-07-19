//
//  ItemQualityAgedBrie.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//"Aged Brie" actually increases in Quality the older it gets

class ItemQualityAgedBrie : ItemQuality {
    
    override init(item: Item) {
        super.init(item: item)
    }
    
    override func updateQuality() {
        guard let item = item else {
            return
        }
        defer {
            limitQuality(max: 50)
        }
        if isExpired() {
            item.quality = item.quality + 2
            return
        }
        item.quality = item.quality + 1
    }
    
}
