import ConjuredItem from '../src/ConjuredItem.js';

describe('Conjured Items', () => {
    const name = 'Conjured';
    it('should lower in quality', () => {
        const quality = 2, sellIn = 1;
        const conjured = new ConjuredItem({name, quality, sellIn});
        conjured.updateQuality();
        expect(conjured.quality).toEqual(quality-2);
    });

    it('should lower in quality past sellIn', () => {
        const quality = 4, sellIn = -1;
        const conjured = new ConjuredItem({name, quality, sellIn});
        conjured.updateQuality();
        expect(conjured.quality).toEqual(quality-4);
    });
});