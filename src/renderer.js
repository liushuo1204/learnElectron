// 获取 dom 节点
const message = document.querySelector('.message')
const button = document.querySelector('.button')
// 监听事件
button.addEventListener('click', () => {
    message.innerHTML = 'Hello Electron!'
})