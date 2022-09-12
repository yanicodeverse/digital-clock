let sec_span = document.getElementById('second');
let min_span = document.getElementById('minute');
let hr_span = document.getElementById('hour');
// ========//
// function 

let duration_tik_tik = () => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if (hr < 10){
        hr = '0' + hr;
    }
    if (min < 10){
        min = '0' + min;
    }
    if (sec < 10){
        sec = '0' + sec;
    }
    
    hr_span.innerHTML = hr;
    min_span.innerHTML =  min;
    sec_span.innerHTML = sec;
}

setInterval(duration_tik_tik, 100);