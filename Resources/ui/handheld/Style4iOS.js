// key color
var keyColor = '#1abc9c';

// tab group
exports.setTabGroupStyle = function(e) {
    e.tabsBackgroundColor = '#f8f8f8';
    e.shadowImage = 'images/shadowimage.png';
    e.tabsBackgroundImage = 'images/tabbar.png';
    e.activeTabBackgroundImage = 'images/activetab.png';
};

// window
exports.setWindowStyle = function(e) {
    e.backgroundColor = '#f8f8f8';
    e.barColor = keyColor;
    e.barImage = 'images/navbar.png';
};

// window title
exports.setWindowTitleLabelStyle = function(titleLabel) {
    titleLabel.width = 210;
    titleLabel.color = '#f8f8f8';
    titleLabel.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    titleLabel.height = 24;
    titleLabel.font = {
        fontFamily : 'Rounded M+ 1p',
        fontSize : 22
    };
    titleLabel.wordWrap = false;
};

//--------------
//Tab1 Window
//--------------
exports.setTab1WindowTableViewStyle = function(tableView) {
    tableView.backgroundColor = '#f8f8f8';
    tableView.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
    tableView.separatorColor = '#ecf0f1';
};
exports.setTab1WindowRowStyle = function(row) {
    row.color = '#333';
    row.height = 42;
    row.font = {
        fontSize : 14
    };
    row.hasChild = false;
    row.selectedBackgroundColor = keyColor;
};
exports.setTab1WindowRowTitleLabelStyle = function(titleLabel) {
    titleLabel.left = 50;
    titleLabel.width = 210;
    titleLabel.height = 20;
    titleLabel.color = '#333';
    titleLabel.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    titleLabel.font = {
        fontSize : 16,
        fontFamily : 'Rounded M+ 1p'
    };
    titleLabel.wordWrap = false;
};
exports.setTab1WindowRowIconViewStyle = function(v) {
    v.left = 10;
    v.width = 30;
    v.height = '100%';
};

//--------------
//Tab2 Window
//--------------
exports.setTab2TableViewStyle = function(e) {
    e.backgroundColor = "#f8f8f8";
    e.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
};
exports.setTab2RowTitleLabelStyle = function(e) {
    e.color = '#333';
    e.font = {
        fontSize : 16,
        fontFamily : 'Rounded M+ 1p'
    };
    e.width = 166;
    e.height = 56;
    e.top = 4;
};
exports.setTab2RowViewCountStyle = function(e) {
    e.color = '#333';
    e.font = {
        fontSize : 10,
        fontFamily : 'Rounded M+ 1p'
    };
    e.width = 93;
    e.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    e.height = 14;
    e.bottom = 10;
    e.right = 10;
};
exports.setTab2RowSecondsLabelStyle = function(e) {
    e.color = '#333';
    e.font = {
        fontSize : 10,
        fontFamily : 'Rounded M+ 1p'
    };
    e.width = 73;
    e.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    e.height = 14;
    e.left = 144;
    e.bottom = 10;
};
exports.setTab2RowImageViewStyle = function(e) {
    e.width = 134;
    e.height = 100;
    e.defaultImage = 'images/imageviewdefault.png';
    e.left = 0;
    e.opacity = 0.72;
};
exports.setTab2RowTitleAreaStyle = function(e) {
    e.left = 144;
    e.width = 166;
    e.height = 56;
    e.top = 10;
};
exports.setTab2TableViewRowStyle = function(e, flg) {
    e.hasChild = false;
    e.selectedBackgroundColor = keyColor;
    e.height = 100;
    if (flg) {
        e.backgroundColor = '#f8f8f8';
    } else {
        e.backgroundColor = '#ecf0f1';
    }
};
