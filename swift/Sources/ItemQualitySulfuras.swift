//
//  ItemQualitySulfuras.swift
//  GildedRose
//
//  Created by Aaron Smith on 7/18/18.
//

import Foundation

//"Sulfuras", being a legendary item, never has to be sold or decreases in Quality

class ItemQualitySulfuras : ItemQuality {
    
    override init(item: Item) {
        super.init(item: item)
        sellInModifier = 0
        qualityModifier = 0
        allowModifierChanges = false
    }
    
}
