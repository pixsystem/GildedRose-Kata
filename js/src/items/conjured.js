import ShopItem from '../shop/shop_item';

export default class Conjured extends ShopItem {
  constructor(item) {
    super(item);
    this.degradeRate = 2;
  }
  updateQuality() {
    super.updateQuality(this.degradeRate);
  }
}
