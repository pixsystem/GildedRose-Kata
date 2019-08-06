function createP(content) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(content));
    return p;
}

function showHeaderFor(day, container) {
    container.appendChild(createP('-------- day ' + day + ' --------'));
    //$('body').append('<p></p>');
}

function showItemsFor(items, container) {
    container.appendChild(createP('name, sellIn, quality'));
    //$('body').append('<p>name, sellIn, quality</p>');
  
    items.forEach(({name, sellIn, quality}) => {
        container.appendChild(createP([name, sellIn, quality].join(', ')));
    })
  /*  
  for (var j = 0; j < gildedRose.items.length; j++) {
    var item = gildedRose.items[j];
    $('body').append('<p>' + item.name + ', ' + item.sellIn + ', ' + item.quality + '</p>');
  }*/
  container.appendChild(document.createElement('br'));
  //$('body').append('<br />');
}