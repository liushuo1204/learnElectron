console.log('open electron app')

const { app, BrowserWindow } = require('electron')

// 1.创建应用窗口
function createWindow() {
    const win = new BrowserWindow()
}

// 2.监听生命周期
app.on('ready', () => {
    createWindow()
})