export default class ShopItem {
  constructor(item) {
    this.item = item;

    this.MAX_QUALITY = 50;
    this.MIN_QUALITY = 0;
  }

  isPastSellDate() {
    return this.item.sellIn <= 0;
  }

  qualityMaxReached() {
    return this.item.quality >= this.MAX_QUALITY;
  }

  qualityMinReached() {
    return this.item.quality <= this.MIN_QUALITY;
  }

  updateSellIn() {
    this.item.sellIn--;
  }

  updateQuality(degradeRate) {
    if (this.qualityMinReached()) {
      return;
    }
    if (this.isPastSellDate()) {
      this.item.quality = this.item.quality - 2; //once the sell by date has passed, quality degrades twice as fast
      return;
    }

    this.item.quality = Math.max(
      this.MIN_QUALITY,
      Math.min(this.item.quality - degradeRate, this.MAX_QUALITY)
    );

    this.updateSellIn();
  }
}
