var data = [];
for(var i=0; i<500; i++) {
    var row = Alloy.createController('tablerow', {
        heading: "Row " + i,
        subheading: "This is a subtitle",
        i: i
    });
    data.push(row.getView());
}
$.table.data = data;

$.table.addEventListener('click', function(e) {
    Ti.API.info('Row ' + e.row.i + ' was clicked');
    if(e.source == e.row.children[0]) {
        Ti.API.info('you clicked the image');
        e.source.image = "/dark_star.png";
    }
});
