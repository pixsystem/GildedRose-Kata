import ShopItem from './Item.js';

class LegendaryItem extends ShopItem {
    constructor({name, sellIn, quality}) {
        super({name, sellIn, quality});
        this.quality = quality;
    }

    updateQuality() {
        //this.quality = this.quality;
    }

    updateSellIn() {
        //this.sellIn = this.sellIn;
    }
}

export default LegendaryItem;