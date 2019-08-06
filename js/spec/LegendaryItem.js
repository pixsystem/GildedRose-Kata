import LegendaryItem from '../src/LegendaryItem.js';

describe('Legendary Item', () => {
    const name = 'Sulfuras, Hand of Ragnaros';
    it('should never have to be sold', () => {
        const sellIn = 1, quality = 1;
        const sulfuras = new LegendaryItem({name, quality, sellIn});
        sulfuras.updateSellIn();
        expect(sulfuras.sellIn).toEqual(sellIn);  
    });

    it('should never decreases quality', () => {
        const quality = 1, sellIn = 1;
        const sulfuras = new LegendaryItem({name, quality, sellIn});
        sulfuras.updateQuality();
        expect(sulfuras.quality).toEqual(quality);
    });

    it('should have quality greater than 50', () =>{
        const quality = 51, sellIn=1;
        const sulfuras = new LegendaryItem({name, quality, sellIn});
        expect(sulfuras.quality).toBeGreaterThan(50);
    });
});