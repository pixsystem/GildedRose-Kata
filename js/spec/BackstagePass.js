import BackstagePass from '../src/BackstagePass.js';

describe('Backstage passes', () => {
    const name = 'Backstage passes to a TAFKAL80ETC concert';

    it('should increase in quality', () => {
        const quality = 1, sellIn = 11;
        const pass = new BackstagePass({name, quality, sellIn});
        pass.updateQuality();
        expect(pass.quality).toEqual(quality + 1);
    });

    it('should increase in quality by 2', () => {
        //Quality increases by 2 when there are 10 days or less
        const quality = 1, sellIn = 10;
        const pass = new BackstagePass({name, quality, sellIn});
        pass.updateQuality();
        expect(pass.quality).toEqual(quality + 2);

    });

    it('should increase in quality by 3', () => {
        //Quality increases by 3 when there are 5 days or less
        const quality = 1, sellIn = 5;
        const pass = new BackstagePass({name, quality, sellIn});
        pass.updateQuality();
        expect(pass.quality).toEqual(quality + 3);
    });

    it('should drop in quality', () => {
        const quality = 1, sellIn = -1;
        const pass = new BackstagePass({name, quality, sellIn});
        pass.updateQuality();
        expect(pass.quality).toEqual(0);
    });

    it('should have max quality 50', () => {
        const quality = 49, sellIn = 5;
        const pass = new BackstagePass({name, quality, sellIn});
        pass.updateQuality();
        expect(pass.quality).toEqual(50);
    });
});