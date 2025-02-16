const { contextBridge } = require('electron')

// 基本语法(为 window 扩展)
// contextBridge.exposeInMainWorld('test', '这是一个值')

contextBridge.exposeInMainWorld('electronAPI', {
    // 平台名称
    platfrom: process.platform,
    getVersions() {
        return process.versions
    }
})