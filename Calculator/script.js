const display = document.getElementById("display");

function addToDisplay(input) {
    display.value += input;
    console.log(display.value);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}
// const sound2 = new Audio("sound/Vitamin String Quartet.mp3");
// window.onload = soundplay();

// function soundplay()
// {
//     sound2.play();
// }

const chordMap = {
    btn9: "sound/piano-key-c-major_C_major.wav",
    btn8: "sound/piano-key-f-major_F_major.wav",
    btn7: "sound/piano-key-g-major_G_major.wav"
}

Object.keys(chordMap).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const sound = new Audio(chordMap[buttonId]);

    button.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();

    })
})
