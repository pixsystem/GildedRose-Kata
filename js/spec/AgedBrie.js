import AgedBrie from '../src/AgedBrie.js';

describe('Aged Brie', () => {
    const name = 'Aged Brie'
    it('should increase quality', () => {
        const quality = 0, sellIn = 1;
        const brie = new AgedBrie({name, quality, sellIn});
        brie.updateQuality();
        expect(brie.quality).toEqual(quality + 1);
    });

    it('should increase quality faster', () => {
        const quality = 0, sellIn = 0;
        const brie = new AgedBrie({name, quality, sellIn});
        brie.updateQuality();
        expect(brie.quality).toEqual(quality + 1);
    });

    it('should at most quality 50', () => {
        const quality = 1, sellIn = -1;
        const brie = new AgedBrie({name, quality, sellIn});
        brie.updateQuality();
        expect(brie.quality).toEqual(quality+2);                
    });
});