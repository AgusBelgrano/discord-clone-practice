const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const ipc = ipcMain;

const createWindow = () => {

    const win = new BrowserWindow({
        width: 1200,
        height: 623,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: __dirname + '/preload.js',
        },
    });

    isDev ? win.loadURL("http://localhost:3000") : win.loadFile(path.join(__dirname, "./index.html"));

    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }

    win.setMenu(null);

    ipc.on("closeApp", () => {
        win.close();
    })

    ipc.on("maximizeApp", () => {
        win.maximize();
    })

    ipc.on("minimizeApp", () => {
        win.minimize();
    })

    ipc.on("restoreApp", () => {
        win.restore();
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})