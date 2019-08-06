import ShopItem from '../src/Item.js';

describe('Item', () => {
    beforeEach(() => {
    });
    const name = 'foo';

    it('should update quality and sellIn', () => {
        const quality = 1, sellIn = 1;
        const item = new ShopItem({name, quality, sellIn});
        item.update();
        expect(item.quality).toEqual(quality-1);
        expect(item.sellIn).toEqual(sellIn-1);
    });

    it('should lower in quality', () => {
        const quality = 1, sellIn = 1;
        const item = new ShopItem({name, quality, sellIn});
        item.updateQuality();
        expect(item.quality).toEqual(quality-1);
    });

    it('should lower in sell-in day count', () => {
        const quality = 1, sellIn = 1;
        const item = new ShopItem({name, quality, sellIn});
        item.updateSellIn();
        expect(item.sellIn).toEqual(sellIn-1);
    });

    it('should lower in quality twice as fast past sellIn', () => {
        //past expiration
        const quality = 2, sellIn = -1;
        const item = new ShopItem({name, quality, sellIn});
        item.updateQuality();
        expect(item.quality).toEqual(quality-2);
    });

    it('should always have min quality 0', () => {
        const quality = 0, sellIn = 1;
        const item = new ShopItem({name, quality, sellIn});
        item.updateQuality();
        expect(item.quality).toEqual(quality);
    });
    
    it('should have max quality 50', () => {
        const quality = 51, sellIn = 1;
        const item = new ShopItem({name, quality, sellIn});
        expect(item.quality).toEqual(50);
    });
});