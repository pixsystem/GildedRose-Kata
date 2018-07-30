import Shop from '../src/shop/shop';
import Item from '../src/item/item';

describe('verify updateQuality works as expected', () => {
  it('verifies Sulfuras quality is never altered from 80', () => {
    let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    let items = [sulfuras];
    let shop = new Shop(items);
    shop.updateQuality();

    expect(sulfuras.quality).toEqual(80);
  });

  it('verifies BackStage pass quality alteration is handled accordingly', () => {
    let pass = new Item('BackStagePass', 11, 30);

    let items = [pass];
    let shop = new Shop(items);
    shop.updateQuality();

    expect(pass.quality).toEqual(31);
    expect(pass.sellIn).toEqual(10);
  });

  it('verifies Conjured degrades twice as fast', () => {
    let conjured = new Item('Conjured', 11, 3);

    let shop = new Shop([conjured]);
    shop.updateQuality();
    console.log(`pass quality ${conjured.quality}`);
    expect(conjured.quality).toEqual(1);
    expect(conjured.sellIn).toEqual(10);
  });

  it('verifies Aged Brie actually increases in quality the older it gets', () => {
    let brie = new Item('Aged Brie', 11, 3);

    let shop = new Shop([brie]);
    shop.updateQuality();
    console.log(`pass quality ${brie.quality}`);
    expect(brie.quality).toEqual(4);
    expect(brie.sellIn).toEqual(10);
  });

  it('verifies a generic item degrades normally', () => {
    let foo = new Item('foo', 0, 2);

    let shop = new Shop([foo]);
    shop.updateQuality();

    expect(foo.quality).toEqual(0);
    expect(foo.sellIn).toEqual(0);
  });
});
