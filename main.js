console.log('open electron app')

const { app, BrowserWindow } = require('electron')

// 1.创建应用窗口
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        titleBarStyle: 'hidden',
        titleBarOverlay: true,
    })

    // 3.加载一个页面
    // win.loadFile('./src/public/index.html')
    win.loadURL('https://www.baidu.com')
}

// 2.监听生命周期
app.on('ready', () => {
    createWindow()
})

// 只能 mac 系统上使用
// app.on('activate', () => {
//     console.log('Electron 被激活了')
// })