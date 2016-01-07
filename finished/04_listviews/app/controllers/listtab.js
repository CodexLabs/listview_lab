var data = [];
for(var i=0; i<500; i++) {
    var item = {
        heading: {text: "Item " + i},
        subheading: {text: "This is a subtitle"},
        leftimage: {image: (i%2) ? '/dark_heart.png' : '/dark_skull.png'},
        template: (i%2) ? 'odd' : 'even'
    };
    data.push(item);
}
$.section.setItems(data);

$.list.addEventListener('itemclick', function(e) {
    Ti.API.info('Item ' + e.itemIndex + ' was clicked');
    var item = e.section.getItemAt(e.itemIndex);
    if(e.bindId == 'leftimage') {
        Ti.API.info('you clicked the image');
        item.leftimage.image = "/dark_star.png";
        e.section.updateItemAt(e.itemIndex, item);
    }
});
