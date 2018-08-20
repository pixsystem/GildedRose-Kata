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
    }

    return this.items;
  }

  dispatchUpdate(item) {
    const staticItems = ["Sulfuras, Hand of Ragnaros"];
    const increaseItems = ["Aged Brie"];
    const passes = ["Backstage passes to a TAFKAL80ETC concert"];
    const conjured = "conjured";

    item.sellIn--;

    if (staticItems.find(function(staticItem) { return item.name === staticItem; })) {
      return true;
    }

    if (increaseItems.find(function(increaseItem) { return item.name === increaseItem; })) {
      return this.updateIncreaseItem(item);
    }

    if (passes.find(function(pass) { return item.name === pass; })) {
      return this.updatePass(item);
    }

    if (item.name.toLowerCase().indexOf(conjured) !== -1) {
      return this.updateRegularItem(item, 2);
    }

    return this.updateRegularItem(item, 1);
  }

  updatePass(item) {
    let valueAdd = 0;

    if (item.sellIn <= 0) {
      valueAdd = 0 - item.quality;
    } else if (item.sellIn <= 5) {
      valueAdd = 3;
    } else if (item.sellIn <= 10) {
      valueAdd = 2;
    } else {
      valueAdd = 1;
    }

    item.quality += valueAdd;

    if (item.quality > 50) {
      item.quality = 50;
    }

    return true;
  }

  updateIncreaseItem(item) {
    if (item.quality < 50) {
      item.quality++;
    }
    return true;
  }

  updateRegularItem(item, multiplier) {
    if (item.sellIn < 0) {
      item.quality -= 2 * multiplier;
    } else {
      item.quality -= 1 * multiplier;
    }

    if (item.quality < 0) {
      item.quality = 0;
    }

    return true;
  }
}
