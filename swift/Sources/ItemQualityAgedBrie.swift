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
        qualityModifier = 1
    }
    
}
