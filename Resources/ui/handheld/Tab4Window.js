function Tab4Window(title) {
    var styleJS;
    styleJS = require('ui/handheld/Style4iOS');

    var windowTitle = Ti.UI.createLabel();
    windowTitle.text = title;
    styleJS.setWindowTitleLabelStyle(windowTitle);

    var win = Ti.UI.createWindow();
    win.titleControl = windowTitle;
    win.layout = 'vertical';
    styleJS.setWindowStyle(win);

    return win;
};

module.exports = Tab4Window;
