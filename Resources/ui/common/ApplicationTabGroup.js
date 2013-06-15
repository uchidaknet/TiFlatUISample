function ApplicationTabGroup() {
    var StyleJS;
    StyleJS = require('ui/handheld/Style4iOS');

    var self = Ti.UI.createTabGroup();
    StyleJS.setTabGroupStyle(self);

    var Tab1Window = require('ui/handheld/Tab1Window');
    var Tab2Window = require('ui/handheld/Tab2Window');
    var Tab3Window = require('ui/handheld/Tab3Window');
    var Tab4Window = require('ui/handheld/Tab4Window');
    var Tab5Window = require('ui/handheld/Tab5Window');

    var win1 = new Tab1Window(L('tab1'));
    var win2 = new Tab2Window(L('tab2'));
    var win3 = new Tab3Window(L('tab3'));
    var win4 = new Tab4Window(L('tab4'));
    var win5 = new Tab5Window(L('tab5'));

    var tab1 = Ti.UI.createTab({
        activeIcon : 'images/tab1ica.png',
        icon : '/images/tab1ic.png',
        window : win1
    });
    win1.containingTab = tab1;

    var tab2 = Ti.UI.createTab({
        activeIcon : 'images/tab2ica.png',
        icon : '/images/tab2ic.png',
        window : win2
    });
    win2.containingTab = tab2;

    var tab3 = Ti.UI.createTab({
        activeIcon : 'images/tab3ica.png',
        icon : '/images/tab3ic.png',
        window : win3
    });
    win3.containingTab = tab3;

    var tab4 = Ti.UI.createTab({
        activeIcon : 'images/tab4ica.png',
        icon : '/images/tab4ic.png',
        window : win4
    });
    win4.containingTab = tab4;

    var tab5 = Ti.UI.createTab({
        activeIcon : 'images/tab5ica.png',
        icon : '/images/tab5ic.png',
        window : win5
    });
    win5.containingTab = tab5;

    self.addTab(tab1);
    self.addTab(tab2);
    self.addTab(tab3);
    self.addTab(tab4);
    self.addTab(tab5);

    return self;
};

module.exports = ApplicationTabGroup;
