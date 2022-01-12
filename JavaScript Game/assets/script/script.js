let watchImage = document.getElementById('watch-image');
let heading = document.getElementById('watch-heading');
let redBtn = document.getElementById('redbtn');
let blackBtn = document.getElementById('blackbtn');
let blueBtn = document.getElementById('bluebtn');
let pinkBtn = document.getElementById('pinkbtn');
let purpleBtn = document.getElementById('purplebtn');
let digital = document.getElementById('digital');
let digitalWatch = document.getElementById('digital-watch');
let heartbeat = document.getElementById('heartbeat');
let heart = document.getElementById('heart');
let heartRate = document.getElementById('heart-rate');
let watchScreen = document.getElementById('watch-screen');

(function () {
    digitalWatch.style.display = 'none';
    heart.style.display = 'none';
})()

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if( hour == 12) {
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    digitalWatch.textContent = currentTime;
}

digital.onclick = () => {
    digital.style.backgroundColor = '#000';
    digital.style.color = '#fff';
    heartbeat.style.backgroundColor = '#fff';
    heartbeat.style.color = '#000';
    watchScreen.className = 'watch-clock';
    digitalWatch.style.display = 'block';
    heart.style.display = 'none';
    setInterval(showTime, 1000);
}

heartbeat.onclick = () => {
    let getRate = Math.floor(Math.random() * (100 - 30) + 30);
    heartRate.textContent = `${getRate}`;
    heartbeat.style.backgroundColor = '#000';
    heartbeat.style.color = '#fff';
    digital.style.backgroundColor = '#fff';
    digital.style.color = '#000';
    watchScreen.className = 'watch-heart';
    digitalWatch.style.display = 'none';
    heart.style.display = 'block';
}

redBtn.onclick = () => {
    watchImage.src = './assets/images/red.png';
}

blackBtn.onclick = () => {
    watchImage.src = './assets/images/black.png';
}

blueBtn.onclick = () => {
    watchImage.src = './assets/images/blue.png';
}

pinkBtn.onclick = () => {
    watchImage.src = './assets/images/pink.png';
}

purpleBtn.onclick = () => {
    watchImage.src = './assets/images/purple.png';
}