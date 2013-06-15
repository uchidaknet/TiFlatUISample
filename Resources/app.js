var globals = {};
Ti.App.iOSAPPVERSION = '1.0.0';

if (Ti.version < 1.8) {
    alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
    var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
    globals.tabs = new ApplicationTabGroup();
    globals.tabs.opacity = 0.1;

    var dummyWindow = Ti.UI.createWindow();
    dummyWindow.backgroundColor = '#f8f8f8';
    dummyWindow.open();

    var animation = Titanium.UI.createAnimation();
    animation.opacity = 1.0;
    animation.duration = 1500;
    animation.addEventListener('complete',function(e){
        dummyWindow.close();
    });

    globals.tabs.open(animation);
})();
