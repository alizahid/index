/* jshint node: true */

'use strict';

const electron = require('electron'),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow,
	emberAppLocation = 'file://' + __dirname + '/dist/index.html';

let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		title: 'Index',
		width: 420,
		height: 680,
		resizable: false,
		fullscreenable: false
	});

	mainWindow.loadURL(emberAppLocation);

	mainWindow.webContents.on('did-fail-load', () => {
		mainWindow.loadURL(emberAppLocation);
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function onWindowAllClosed() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	if (mainWindow === null) {
		createWindow();
	}
});
