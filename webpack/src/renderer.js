import './index.css'

document.querySelector('#root').innerHTML = `
    <h1>Hello World!!</h1>
    <div id="time"></div>
`

const currentTime = () => {
    const date = new Date()
    return date
}

setInterval(() => {
    document.querySelector('#time').innerText = currentTime()
}, 1000)
