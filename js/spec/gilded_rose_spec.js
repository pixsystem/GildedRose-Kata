describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe("Regular Item", function() {
    it("should degrade quality by one", function() {
      const gildedRose = new Shop([new Item("Bracers +1", 3, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it("should degrade quality by two", function() {
      const gildedRose = new Shop([new Item("Bracers +1", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });

    it("should not degrade quality", function() {
      const gildedRose = new Shop([new Item("Bracers +1", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Aged Brie", function() {
    it("should increase in quality", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(6);
    });

    it("should not have quality above 50", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("should not change quality at all", function() {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 5, 80)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("should not change quality at all", function() {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", -1, 80)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });
  });

  describe("Backstage passes", function() {
    it("should increase in value by one", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 20, 40)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(41);
    });
    it("should increase in value by two", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(42);
    });
    it("should increase in value by three", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(43);
    });
    it("should increase not increase value above 50", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
    it("should have zero quality", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
  
  describe("Conjured items", function() {
    it("should decrease in value by 2", function() {
      const gildedRose = new Shop([new Item("Conjured socks", 20, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(38);
    });
    it("should decrease in value by 4", function() {
      const gildedRose = new Shop([new Item("Conjured socks", 0, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(36);
    });
    it("should decrease have a value of zero", function() {
      const gildedRose = new Shop([new Item("Conjured socks", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
});
