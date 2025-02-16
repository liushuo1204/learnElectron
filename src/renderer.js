const message = document.querySelector('.message')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
    message.innerHTML = 'Hello Electron!'
})