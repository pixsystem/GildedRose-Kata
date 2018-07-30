import ItemFactory from '../factory/item_factory';

class Shop {
  constructor(items) {
    this.items = items;
  }

  updateQuality = () => {
    this.items.map(ItemFactory.create).forEach(item => item.updateQuality());
  };
}

export default Shop;
