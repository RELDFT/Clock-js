
setInterval(() => {
    let date = new Date()
    // let hours = new Date().getHours();
    // let minutes = new Date().getMinutes();
    // let seconds = new Date().getSeconds();
    
    // let time = `${hours}:${minutes}:${seconds}`;
    // let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // console.log(time)
    
    let element = document.getElementById('time')
    // element.innerHTML = time
    element.innerHTML = date.toLocaleTimeString()
}, 1000)

// let interval;

// function Clock() {
//     const date = new Date();
//     document.getElementById("time").innerHTML = date.toLocaleTimeString();
// }

// const start = () => {
//     interval = setInterval(Clock, 1000);
// }

// // const stop = () => {
// //     clearInterval(interval);
// // }

// start();