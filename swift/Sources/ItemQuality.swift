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
    
    init(item:Item) {
        self.item = item
    }
    
    func isExpired() -> Bool {
        guard let item = item else {
            return true
        }
        return item.sellIn <= 0
    }
    
    func limitQuality(max:Int) {
        guard let item = item else {
            return
        }
        if item.quality > max {
            item.quality = max
        }
    }
    
    func limitQuality(min:Int) {
        guard let item = item else {
            return
        }
        if item.quality < min {
            item.quality = min
        }
    }
    
    func updateSellIn() {
        guard let item = item else {
            return
        }
        item.sellIn = item.sellIn - 1
    }
    
    func updateQuality() {
        guard let item = item else {
            return
        }
        defer {
            if item.quality < 0 {
                item.quality = 0
            }
        }
        if isExpired() {
            item.quality = item.quality - 2
            return
        }
        item.quality = item.quality - 1
    }
    
    func update() {
        updateQuality()
        updateSellIn()
    }
    
}
