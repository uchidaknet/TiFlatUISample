function Tab2Window(title) {
    var styleJS;
    styleJS = require('ui/handheld/Style4iOS');

    var windowTitle = Ti.UI.createLabel();
    windowTitle.text = title;
    styleJS.setWindowTitleLabelStyle(windowTitle);

    var win = Ti.UI.createWindow();
    win.titleControl = windowTitle;
    styleJS.setWindowStyle(win);

    var reloadButton = Ti.UI.createButton();
    reloadButton.width = 44;
    reloadButton.height = 44;
    reloadButton.backgroundImage = 'images/reload-button.png';
    win.rightNavButton = reloadButton;
    reloadButton.addEventListener('click', function(e) {
        alert('reload button click');
    });

    var tableView = Ti.UI.createTableView();
    styleJS.setTab2TableViewStyle(tableView);

    setTableViewData(tableView);

    win.add(tableView);

    return win;
};

function setTableViewData(tableView) {
    var styleJS = require('ui/handheld/Style4iOS');
    var section = Ti.UI.createTableViewSection();

    var data = [];
    data.push({
        thumbnail : 'images/thumbnail.jpg',
        title : 'ABCDEあいうえおかきくけこさしすせそたちつてと',
        count : '10000',
        seconds : '10:00:00'
    });

    for (var i = 0; i < 50; i++) {
        // row
        var row = Ti.UI.createTableViewRow({
            id : i,
            className : 'tomato'
        });
        
        var rowStyleFlg = 0;
        if (i % 2) {
            rowStyleFlg = 0;
        } else {
            rowStyleFlg = 1;
        }

        styleJS.setTab2TableViewRowStyle(row, rowStyleFlg);

        // thumbnail
        var rowImageView = Ti.UI.createImageView();
        styleJS.setTab2RowImageViewStyle(rowImageView);
        rowImageView.image = data[0].thumbnail;

        // title area
        var titleArea = Ti.UI.createView();
        styleJS.setTab2RowTitleAreaStyle(titleArea);

        // title
        var titleLabel = Ti.UI.createLabel();
        titleLabel.text = data[0].title;
        styleJS.setTab2RowTitleLabelStyle(titleLabel);
        row.add(titleLabel);

        // count
        var rowViewCount = Ti.UI.createLabel();
        styleJS.setTab2RowViewCountStyle(rowViewCount);
        rowViewCount.text = data[0].count;

        // seconds
        var rowSeconds = Ti.UI.createLabel();
        styleJS.setTab2RowSecondsLabelStyle(rowSeconds);
        rowSeconds.text = data[0].seconds;

        row.add(rowImageView);
        row.add(rowSeconds);
        row.add(titleArea);
        titleArea.add(titleLabel);
        row.add(rowViewCount);

        section.add(row);
    }
    tableView.appendSection(section);
};

module.exports = Tab2Window;
