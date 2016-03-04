/* jshint node: true */

'use strict';

const electron = require('electron'),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow,
	emberAppLocation = 'file://' + __dirname + '/dist/index.html';

let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 480,
		height: 800
	});

	// mainWindow.openDevTools();

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
