function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listtab";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "ListView",
        id: "__alloyId3"
    });
    var __alloyId4 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
        type: "Ti.UI.ImageView",
        bindId: "leftimage",
        properties: {
            left: 6,
            top: 6,
            width: 48,
            height: 48,
            bindId: "leftimage"
        }
    };
    __alloyId6.push(__alloyId7);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId6.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId6.push(__alloyId9);
    var __alloyId5 = {
        properties: {
            height: "60",
            name: "odd",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId6
    };
    __alloyId4["odd"] = __alloyId5;
    var __alloyId12 = [];
    var __alloyId13 = {
        type: "Ti.UI.ImageView",
        bindId: "leftimage",
        properties: {
            left: 6,
            top: 6,
            width: 48,
            height: 48,
            bindId: "leftimage"
        }
    };
    __alloyId12.push(__alloyId13);
    var __alloyId14 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId12.push(__alloyId14);
    var __alloyId15 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId12.push(__alloyId15);
    var __alloyId11 = {
        properties: {
            name: "even",
            height: "60"
        },
        childTemplates: __alloyId12
    };
    __alloyId4["even"] = __alloyId11;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId17 = [];
    __alloyId17.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId17,
        templates: __alloyId4,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.__alloyId3.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId3,
        title: "ListView",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 45e4 > i; i++) {
        var item = {
            heading: {
                text: "Item " + i
            },
            subheading: {
                text: "This is a subtitle"
            },
            leftimage: {
                image: i % 2 ? "/dark_heart.png" : "/dark_skull.png"
            },
            template: i % 2 ? "odd" : "even"
        };
        data.push(item);
    }
    $.section.setItems(data);
    $.list.addEventListener("itemclick", function(e) {
        Ti.API.info("Item " + e.itemIndex + " was clicked");
        var item = e.section.getItemAt(e.itemIndex);
        if ("leftimage" == e.bindId) {
            Ti.API.info("you clicked the image");
            item.leftimage.image = "/dark_star.png";
            e.section.updateItemAt(e.itemIndex, item);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;