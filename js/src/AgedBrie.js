import ShopItem from './Item.js';

class AgedBrie extends ShopItem {
    constructor({name, sellIn, quality}) {
        super({name, sellIn, quality});
    }

    update() {
        this.updateSellIn();
        this.updateQuality();
    }

    updateQuality() {
        if(this.quality < 50) {
            const increase = this.sellIn < 0 ? 2 : 1
            this.quality = Math.min(this.quality + increase, 50);
        }
    }
}
export default AgedBrie;
