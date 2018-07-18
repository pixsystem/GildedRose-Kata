//
//  ItemQualityConjured.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//"Conjured" items degrade in Quality twice as fast as normal items

class ItemQualityConjured : ItemQuality {
    
    override init(item: Item) {
        super.init(item: item)
        qualityModifier = -1
    }
    
}
