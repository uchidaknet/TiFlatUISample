function Tab1Window(title) {
    var styleJS;
    styleJS = require('ui/handheld/Style4iOS');

    var windowTitle = Ti.UI.createLabel();
    windowTitle.text = title;
    styleJS.setWindowTitleLabelStyle(windowTitle);

    var win = Ti.UI.createWindow();
    win.titleControl = windowTitle;
    win.layout = 'vertical';
    styleJS.setWindowStyle(win);

    var editButton = Ti.UI.createButton();
    styleJS.setTab1WindowEditButtonStyle(editButton);
    win.rightNavButton = editButton;
    editButton.addEventListener('click', function(e) {
        alert('edit button click');
    });

    var backbutton = Titanium.UI.createButton();
    styleJS.setTab1WindowBackButtonStyle(backbutton);
    backbutton.addEventListener('click', function(e) {
        alert('back button click');
    });
    win.leftNavButton = backbutton;

    var movieView = Titanium.Media.createVideoPlayer();
    styleJS.setTab1WindowMovieViewStyle(movieView);
    movieView.url = '/media/infomovie.mp4';
    win.add(movieView);
    
    var tableView = Ti.UI.createTableView();
    styleJS.setTab1WindowTableViewStyle(tableView);
    win.add(tableView);

    var sectionA = Ti.UI.createTableViewSection();
    var sectionB = Ti.UI.createTableViewSection();

    var data = [];
    data.push({
        title : 'Google',
        url : 'http://google.co.jp',
        icon : 'images/more1ic.png'
    });
    data.push({
        title : 'Yahoo',
        url : 'http://yahoo.co.jp',
        icon : 'images/more2ic.png'
    });
    data.push({
        title : 'bing',
        url : 'http://bing.co.jp',
        icon : 'images/more3ic.png'
    });

    var dataB = [];
    dataB.push({
        title : 'Version：' + Ti.App.iOSAPPVERSION,
        url : '',
        icon : 'images/more4ic.png'
    });
    dataB.push({
        title : 'Rate this App',
        url : 'http://uchidak.net',
        icon : 'images/more5ic.png'
    });
    dataB.push({
        title : 'Other Apps',
        url : 'https://uchidak.net',
        icon : 'images/more6ic.png'
    });
    dataB.push({
        title : 'Powered by UCHIDAK.NET',
        url : 'http://uchidak.net',
        icon : 'images/more7ic.png'
    });
    dataB.push({
        title : 'Contact',
        url : 'http://uchidak.net',
        icon : 'images/more8ic.png'
    });

    for (var i = 0; i < data.length; i++) {
        var row = createRow(data[i].title, data[i].icon, data[i].url);
        sectionA.add(row);
    }

    for (var c = 0; c < dataB.length; c++) {
        var row = createRow(dataB[c].title, dataB[c].icon, dataB[c].url);
        sectionB.add(row);
    }

    tableView.appendSection(sectionA);
    tableView.appendSection(sectionB);

    return win;
};

function createRow(title, icon, url) {
    var styleJS;
    styleJS = require('ui/handheld/Style4iOS');

    var row = Ti.UI.createTableViewRow({
        url : url
    });

    styleJS.setTab1WindowRowStyle(row);

    row.addEventListener('click', function(e) {
        if (e.row.url) {
            Ti.Platform.openURL(e.row.url);
        }
    });

    // title
    var titleLabel = Ti.UI.createLabel({
        text : title
    });
    styleJS.setTab1WindowRowTitleLabelStyle(titleLabel);
    row.add(titleLabel);

    // icon
    var rowIconView = Ti.UI.createView();
    styleJS.setTab1WindowRowIconViewStyle(rowIconView);
    row.add(rowIconView);

    var rowIcon = Ti.UI.createImageView({
        image : icon
    });
    rowIconView.add(rowIcon);

    return row;
};

module.exports = Tab1Window;
