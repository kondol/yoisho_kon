var w = Ti.UI.createWindow({
    backgroundColor:'#336699'
});
    
// Logo mark
var logo = Ti.UI.createImageView({
    image:'KS_nav_ui.png',
    height:80,
    width:80,
    top:110
});
w.add(logo);

// Button (tableviewsection?)
var version = Ti.UI.createLabel({
    color: '#000',
    font:{fontSize:15,fontWeight:'bold', fontFamily:'Arial'},
    text: 'Yoisho! v0.0 ~~~~~',
    top: 210
});
w.add(version);

var kiyaku = Ti.UI.createButton({
    title:'kiyaku',
    width:250,
    top:260
});
kiyaku.addEventListener('click', function(e){
    Titanium.include('kiyaku.js');
});
var b1 = Ti.UI.createButton({
    title:'Button 1',
    width:250,
    top:320
});
var b2 = Ti.UI.createButton({
    title:'Button 2',
    width:250,
    top:380
});
w.add(kiyaku);
w.add(b1);
w.add(b2);

w.open();


// MENU bar
var menu = null;
var m1 = null;
var m2 = null;

var activity = Ti.Android.currentActivity;
activity.onCreateOptionsMenu = function(e) {
	menu = e.menu; // save off menu.

	m1 = menu.add({
		itemId : 1,
		groupId : 0,
		order : 0,
		title : 'Back'
	});
	m1.setIcon("KS_nav_ui.png");
	m1.addEventListener('click', function(e) {
		w.close();
	});
};
