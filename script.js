const heart = document.querySelector(".heart");
let stage = 0;

setInterval(() => {
    if (stage === 0) {
        heart.style.transform = "scale(1.5) rotate(-45deg)";
        heart.style.backgroundColor = "blue";
        stage = 1;
    } else {
        heart.style.transform = "scale(1) rotate(-45deg)";
        heart.style.backgroundColor = "red";
        stage = 0;
    }
}, 2000);