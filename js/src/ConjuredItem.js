import ShopItem from './Item.js';

class ConjuredItem extends ShopItem {
    constructor({name, sellIn, quality}) {
        super({name, sellIn, quality});
        this.degradationRate = 2;
    }
}

export default ConjuredItem;