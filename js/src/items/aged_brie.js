import ShopItem from '../shop/shop_item';

export default class AgedBrie extends ShopItem {
  updateQuality() {
    this.item.quality++;
    this.updateSellIn();
  }
}
