import { AgedBrie, Sulfuras, Conjured, BackStagePass } from '../items';

import ShopItem from '../shop/shop_item';

//all generic items will be handled as ShopItem, any special handling requires creation of class that extends ShopItem, with overridden updateQuality
const classes = {
  'Aged Brie': AgedBrie,
  'Sulfuras, Hand of Ragnaros': Sulfuras,
  Conjured: Conjured,
  BackStagePass: BackStagePass
};

class ItemFactory {
  static create(item) {
    let shopItem = classes[item.name];
    if (!shopItem) {
      return new ShopItem(item);
    }
    return new classes[item.name](item);
  }
}

export default ItemFactory;
