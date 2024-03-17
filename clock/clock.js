let hrr = document.getElementById("hr")
let mm = document.getElementById("mm")
let ss = document.getElementById("ss")

// let currentTime = new Date();


// hrs.innerHTML = currentTime.getHours();
// mm.innerHTML = currentTime.getMinutes();
// ss.innerHTML = currentTime.getSeconds();





setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    mm.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    ss.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000)
     
// let hrs = document.getElementById("hr");
// let mn = document.getElementById("mm");
// let sc = document.getElementById("ss");


