import ShopItem from '../shop/shop_item';
export default class BackStagePass extends ShopItem {
  updateQuality() {
    if (!this.isPastSellDate() && !this.qualityMaxReached()) {
      if (this.item.sellIn < 6) {
        this.item.quality += 3;
      } else if (this.item.sellIn < 11) {
        this.item.quality += 2;
      } else {
        this.item.quality += 1;
      }
    } else {
      //past sell date, drop quality to 0
      this.item.quality = 0;
    }
    this.updateSellIn();
  }
}
