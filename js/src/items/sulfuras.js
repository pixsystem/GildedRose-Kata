import ShopItem from '../shop/shop_item';
export default class Sulfuras extends ShopItem {
  updateQuality() {
    return; //never degrades
  }
  updateSellIn() {
    return; //never expires
  }
}
