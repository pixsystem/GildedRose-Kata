class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class ShopItem extends Item {
    constructor({name='', sellIn=0, quality=0}){
        super(name, sellIn, quality);
        this.name = name;
        this.sellIn = sellIn;
        this.quality = Math.min(quality, 50);
        this.degradationRate = 1;
    }

    update() {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality() {
        if(this.quality > 0) {
            const degradation = this.sellIn < 0 ? 2 : 1;
            this.quality = Math.max(this.quality - (degradation*this.degradationRate), 0);
        }
    }

    updateSellIn() {
        this.sellIn = this.sellIn - 1;
    }
}

export default ShopItem;
