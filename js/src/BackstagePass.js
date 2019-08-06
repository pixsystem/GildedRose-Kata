import ShopItem from './Item.js';

class BackstagePass extends ShopItem {
    constructor({name, sellIn, quality}) {
        super({name, sellIn, quality});
    }

    updateQuality() {
        if(this.sellIn < 0) {
            this.quality = 0;
        } else if(this.quality < 50) {
            let increase = 1;
            
            if(this.sellIn < 11) {
                increase++;
            }

            if(this.sellIn < 6) {
                increase++;
            }

            this.quality = Math.min(this.quality + increase, 50);
        }
    }
}

export default BackstagePass;