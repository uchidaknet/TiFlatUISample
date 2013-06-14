var globals = {};
Ti.App.iOSAPPVERSION = '1.0.0';

if (Ti.version < 1.8) {
    alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
    var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
    globals.tabs = new ApplicationTabGroup();
    globals.tabs.open();
})();
