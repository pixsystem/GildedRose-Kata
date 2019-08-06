# Gilded Rose Refactor
## Start Server
This directory should be run in on a webserver to correctly import Modules. http-server has been 
included in node_modules. To run a server locally, execute the following on the command line:

`npm i; ./node_modules/.bin/http-server .;`

## Tests
http://127.0.0.1:8080/SpecRunner.html - Unit tests for all classes/modules
http://127.0.0.1:8080/RefactoredTexttestFixture.html - TexttestFixture for refactored code
http://127.0.0.1:8080/TexttestFixture.html - Original fixture, running for 10 days

## New Files:
1. `lib/setup_helpers.js ` - Vanilla Javascript version of TexttestFixture setup
2. `spec/*` - Specs for new classes
3. `src/Item.js` - Base class Item and Shop Item - Decreases in quality by 1 per day
4. `src/AgedBrie.js` - AgedBrie - Increases in quality as it ages. If past sellIn, the quality increases by 2.
5. `src/BackstagePass.js` - BackstagePass / 'Backstage passes to a TAFKAL80ETC concert' - Increases in quality as it ages. Will increase in quality by 2 if sellIn is less than 11 days, by 3 if sellIn is less than 6 days. If past sellIn, quality drops to 0.
6. `src/LegendaryItem.js` - Legendary Item / 'Sulfuras, Hand of Ragnaros' - Does not age or lower in quality
7. `src/ConjuredItem.js` - Decreases in quality twice as fast as ShopItem
8. `src/Shop.js ` - Shop - Has a collection of items and ages them 1 day at a time