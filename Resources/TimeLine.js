// TimeLine.js
var TL = Titanium.UI.currentWindow;

// search bar
var searchBar = Ti.UI.createSearchBar({
	barColor:'#385292',
	showCancel:false
});

var tableView;
var rowData = [];

for (var c = 1; c < 10; c++){
	var row = Titanium.UI.createTableViewRow();
	row.selectBackgroundColor = '#fff';
	row.height = 150;
	row.className = 'datarow';

	// image
	var photo = Titanium.UI.createImageView({
		image: 'KS_nav_ui.png',
		top: 8,
		left: 8,
		width: 48,
		height: 48
	});
	photo.rowNum = c;
	photo.addEventListener('click', function(e){
		Ti.UI.createAlertDialog({
			title:'image',
			message:'clicked'
		}).show();
	});
	row.add(photo);
	
	// label1
	var user = Titanium.UI.createLabel({
		color: '#576996',
		font:{fontSize:12,fontWeight:'bold', fontFamily:'Arial'},
		text: 'sample'+c,
		top: 8,
		left: 64,
		height: 16
	});
	user.rowNum = c;
	user.addEventListener('click',function(e){
		Ti.UI.createAlertDialog({
			title:'name',
			message:'clicked'
		}).show();
	});
	row.add(user);
	
	// label2
	var date = Titanium.UI.createLabel({
		text: 'hogehoge'+c,
		top: 32,
		left: 64,
		width: 256,
		height: 'auto'
	});
	date.rowNum = c;
	row.addEventListener('click', function(e){
		Ti.UI.createAlertDialog({
			title:'detail',
			message:'clicked'
		}).show();
	});
	row.add(date);
	
	// add to line
	rowData.push(row);
}

tableView = Titanium.UI.createTableView({
	data: rowData,
	search:	searchBar
});

TL.add(tableView);

// menu bar
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
		title : 'Information'
	});
	m1.setIcon("KS_nav_ui.png");
	m1.addEventListener('click', function(e) {
		Titanium.include('information.js');
	});
	
	m2 = menu.add({
	    itemId : 2,
	    groupId : 0,
	    order : 1,
	    title : 'Back'
	});
	m2.setIcon("KS_nav_views.png");
	m2.addEventListener('click', function(e) {
	    Ti.UI.currentWindow.close();
	});
};
