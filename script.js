let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec")

let setClock = setInterval(()=>{
    let dateNow = new Date();

    let hr = dateNow.getHours();
    let mn = dateNow.getMinutes();
    let sc = dateNow.getSeconds();

    let clc_hr = (hr * 30) + (mn / 2)
    let clc_mins = (mn * 6) + (sc / 10)
    let clc_sec = sc * 6;

    hour.style.transform = `rotate(${clc_hr}deg)`
    min.style.transform = `rotate(${clc_mins}deg)`
    sec.style.transform = `rotate(${clc_sec}deg)`
}, 1000);