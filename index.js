let numberOfDrums = document.querySelectorAll(".drum").length;
let audio;
for (let i = 0; i < numberOfDrums; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            makeSound(this.innerHTML);
            animationBtn(this.innerHTML);
        });
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animationBtn(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}
function animationBtn(currentKey) {
    let active = document.querySelector(`.${currentKey}`);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}
