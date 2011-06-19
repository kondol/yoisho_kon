// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'TL',
    backgroundColor:'#fff',
    url: 'TimeLine.js',
    exitOnClose: true
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'TL',
    window:win1
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'friend',
    backgroundColor:'#fff',
    url: 'TimeLine.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'friend',
    window:win2
});

var win3 = Titanium.UI.createWindow({  
    title:'Check',
    backgroundColor:'#fff',
    url: 'TimeLine.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Check',
    window:win3
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
