const { app, BrowserWindow, Menu, Tray } = require('electron')
let tray = null
Menu.setApplicationMenu(null);

function createWindow(){

    win = new BrowserWindow();
    win.loadURL('https://dida365.com/sigin');

    win.on('closed',(event)=>{
        win = null;
    });

    win.on('close',(event)=>{
        win.hide();
        win.setSkipTaskbar(true);
        event.preventDefault();
    })

}
app.on('ready', ()=>{
	tray = new Tray('/home/fan/Code/dida/dida.jpg')
	let win = new BrowserWindow();
	var trayMenuTemplate = [
        {
            label: '设置',
            click: function () {} //打开相应页面
        },
        {
            label: '帮助',
            click: function () {}
        },
        {
            label: '关于',
            click: function () {}
        },
        {
            label: '退出',
            click: function () {
                //ipc.send('close-main-window');
                 app.quit();
            }
        }
    ];
	const contextMenu=Menu.buildFromTemplate(trayMenuTemplate);
    tray.setContextMenu(contextMenu);
    tray.on('click',()=>{
        win.isVisible()?win.hide():win.show()
        win.isVisible()?win.setSkipTaskbar(false):win.setSkipTaskbar(true);
    })

	win.loadURL('https://dida365.com/signin');
})
