import ShopItem from '../src/Item.js';
import AgedBrie from '../src/AgedBrie.js';
import BackstagePass from '../src/BackstagePass.js';
import LegendaryItem from '../src/LegendaryItem.js';
import ConjuredItem from '../src/ConjuredItem.js';
import Shop from '../src/Shop.js';

describe('Shop', () => {
    it('should update items', () => {
        const items = [
            new ShopItem({name:'+5 Dexterity Vest', sellIn: 10, quality: 20}),
            new AgedBrie({name: 'Aged Brie', sellIn: 2, quality: 0}),
            new ShopItem({name: 'Elixir of the Mongoose', sellIn: 5, quality: 7}),
            new LegendaryItem({name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80}),
            new LegendaryItem({name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80}),
            new BackstagePass({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 20}),
            new BackstagePass({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 49}),
            new BackstagePass({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 49}),
            new ConjuredItem({name: 'Conjured Mana Cake', sellIn: 3, quality: 6})

        ];
        const shop = new Shop(items);

        for (let i = 0; i < 9; i++) {
            shop.updateQuality();
        }

        expect(items[0].quality).toEqual(11);
        expect(items[0].sellIn).toEqual(1);

        expect(items[1].quality).toEqual(16);
        expect(items[1].sellIn).toEqual(-7);

        expect(items[2].quality).toEqual(0);
        expect(items[2].sellIn).toEqual(-4);

        expect(items[3].quality).toEqual(80);
        expect(items[3].sellIn).toEqual(0);

        expect(items[4].quality).toEqual(80);
        expect(items[4].sellIn).toEqual(-1);

        expect(items[5].quality).toEqual(33);
        expect(items[5].sellIn).toEqual(6);

        expect(items[6].quality).toEqual(50);
        expect(items[6].sellIn).toEqual(1);

        expect(items[7].quality).toEqual(0);
        expect(items[7].sellIn).toEqual(-4);

        expect(items[8].quality).toEqual(0);
        expect(items[8].sellIn).toEqual(-6);

    });
});

