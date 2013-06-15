function Tab3Window(title) {
    var styleJS;
    styleJS = require('ui/handheld/Style4iOS');

    var windowTitle = Ti.UI.createLabel();
    windowTitle.text = title;
    styleJS.setWindowTitleLabelStyle(windowTitle);

    var win = Ti.UI.createWindow();
    styleJS.setWindowStyle(win);
    win.layout = 'vertical';
    win.titleControl = windowTitle;
    win.navBarHidden = true;

    //-----------------------------------------------------
    // header
    //-----------------------------------------------------
    var headerView = Ti.UI.createView();
    styleJS.setTab3LineViewStyle(headerView);
    win.add(headerView);

    var headerLeftView = Ti.UI.createView();
    styleJS.setTab3HeaderMenuAreaStyle(headerLeftView);
    headerView.add(headerLeftView);

    var menuLabelA = Ti.UI.createLabel();
    menuLabelA.text = 'MENU A'
    styleJS.setTab3HeaderMenuLabelStyle(menuLabelA);
    clickMenuLabel(menuLabelA);
    headerLeftView.add(menuLabelA);

    var headerCenterView = Ti.UI.createView();
    headerCenterView.left = 1;
    styleJS.setTab3HeaderMenuAreaStyle(headerCenterView);
    headerView.add(headerCenterView);

    var menuLabelB = Ti.UI.createLabel();
    menuLabelB.text = 'MENU B'
    styleJS.setTab3HeaderMenuLabelStyle(menuLabelB);
    clickMenuLabel(menuLabelB);
    headerCenterView.add(menuLabelB);

    var headerRightView = Ti.UI.createView();
    headerRightView.left = 1;
    styleJS.setTab3HeaderMenuAreaStyle(headerRightView);
    headerView.add(headerRightView);

    var menuLabelC = Ti.UI.createLabel();
    menuLabelC.text = 'MENU C'
    styleJS.setTab3HeaderMenuLabelStyle(menuLabelC);
    clickMenuLabel(menuLabelC);
    headerRightView.add(menuLabelC);

    var scrollView = Ti.UI.createScrollView();
    scrollView.layout = 'vertical';
    scrollView.verticalBounce = true;
    win.add(scrollView);

    var separaterLine = Ti.UI.createView();
    styleJS.setTab3SeparaterLineStyle(separaterLine);;
    scrollView.add(separaterLine);

    //-----------------------------------------------------
    // line1
    //-----------------------------------------------------
    var line1View = Ti.UI.createView();
    styleJS.setTab3LineViewStyle(line1View);
    scrollView.add(line1View);

    var line1LeftView = Ti.UI.createView();
    styleJS.setTab3MainMenuAreaStyle(line1LeftView);
    line1View.add(line1LeftView);

    var menuLabelD = Ti.UI.createLabel();
    menuLabelD.text = 'MENU D'
    styleJS.setTab3MainMenuLabelStyle(menuLabelD);
    clickMenuLabel(menuLabelD);
    line1LeftView.add(menuLabelD);

    var line1CenterView = Ti.UI.createView();
    line1CenterView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line1CenterView);
    line1View.add(line1CenterView);

    var menuLabelE = Ti.UI.createLabel();
    menuLabelE.text = 'MENU E'
    styleJS.setTab3MainMenuLabelStyle(menuLabelE);
    clickMenuLabel(menuLabelE);
    line1CenterView.add(menuLabelE);

    var line1RightView = Ti.UI.createView();
    line1RightView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line1RightView);
    line1View.add(line1RightView);

    var menuLabelF = Ti.UI.createLabel();
    menuLabelF.text = 'MENU F'
    styleJS.setTab3MainMenuLabelStyle(menuLabelF);
    clickMenuLabel(menuLabelF);
    line1RightView.add(menuLabelF);

    var separaterLine1 = Ti.UI.createView();
    styleJS.setTab3SeparaterLineStyle(separaterLine1);
    scrollView.add(separaterLine1);

    //-----------------------------------------------------
    // line2
    //-----------------------------------------------------
    var line2View = Ti.UI.createView();
    styleJS.setTab3LineViewStyle(line2View);
    scrollView.add(line2View);

    var line2LeftView = Ti.UI.createView();
    styleJS.setTab3MainMenuAreaStyle(line2LeftView);
    line2View.add(line2LeftView);

    var menuLabelG = Ti.UI.createLabel();
    menuLabelG.text = 'MENU G'
    styleJS.setTab3MainMenuLabelStyle(menuLabelG);
    clickMenuLabel(menuLabelG);
    line2LeftView.add(menuLabelG);

    var line2CenterView = Ti.UI.createView();
    line2CenterView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line2CenterView);
    line2View.add(line2CenterView);

    var menuLabelH = Ti.UI.createLabel();
    menuLabelH.text = 'MENU H'
    styleJS.setTab3MainMenuLabelStyle(menuLabelH);
    clickMenuLabel(menuLabelH);
    line2CenterView.add(menuLabelH);

    var line2RightView = Ti.UI.createView();
    line2RightView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line2RightView);
    line2View.add(line2RightView);

    var menuLabelI = Ti.UI.createLabel();
    menuLabelI.text = 'MENU I'
    styleJS.setTab3MainMenuLabelStyle(menuLabelI);
    clickMenuLabel(menuLabelI);
    line2RightView.add(menuLabelI);

    var separaterLine2 = Ti.UI.createView();
    styleJS.setTab3SeparaterLineStyle(separaterLine2);
    scrollView.add(separaterLine2);

    //-----------------------------------------------------
    // line3
    //-----------------------------------------------------
    var line3View = Ti.UI.createView();
    styleJS.setTab3LineViewStyle(line3View);
    scrollView.add(line3View);

    var line3LeftView = Ti.UI.createView();
    styleJS.setTab3MainMenuAreaStyle(line3LeftView);
    line3View.add(line3LeftView);

    var menuLabelJ = Ti.UI.createLabel();
    menuLabelJ.text = 'MENU J'
    styleJS.setTab3MainMenuLabelStyle(menuLabelJ);
    clickMenuLabel(menuLabelJ);
    line3LeftView.add(menuLabelJ);

    var line3CenterView = Ti.UI.createView();
    line3CenterView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line3CenterView);
    line3View.add(line3CenterView);

    var menuLabelK = Ti.UI.createLabel();
    menuLabelK.text = 'MENU K'
    styleJS.setTab3MainMenuLabelStyle(menuLabelK);
    clickMenuLabel(menuLabelK);
    line3CenterView.add(menuLabelK);

    var line3RightView = Ti.UI.createView();
    line3RightView.left = 1;
    styleJS.setTab3MainMenuAreaStyle(line3RightView);
    line3View.add(line3RightView);

    var menuLabelL = Ti.UI.createLabel();
    menuLabelL.text = 'MENU L'
    styleJS.setTab3MainMenuLabelStyle(menuLabelL);
    clickMenuLabel(menuLabelL);
    line3RightView.add(menuLabelL);

    var separaterLine3 = Ti.UI.createView();
    styleJS.setTab3SeparaterLineStyle(separaterLine3);
    scrollView.add(separaterLine3);

    return win;
};

function clickMenuLabel(e) {
    e.addEventListener('click',function(){
        alert('click:' + e.text);
    });
};

module.exports = Tab3Window;
