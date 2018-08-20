class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const done = this.dispatchUpdate(item);

      console.log('item name', item.name)
      if (done) {
        continue;
      }

      if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              item.quality = item.quality - 1;
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  dispatchUpdate(item) {
    const staticItems = ["Sulfuras, Hand of Ragnaros"];
    const increaseItems = ["Aged Brie"];

    if (staticItems.find(function(staticItem) { return item.name === staticItem; })) {
      return true;
    }

    if (increaseItems.find(function(increaseItem) { return item.name === increaseItem; })) {
      return this.updateIncreaseItem(item);
    }

    return false;
  }

  updateIncreaseItem(item) {
    if (item.quality < 50) {
      item.quality++;
    }
    return true;
  }
}
