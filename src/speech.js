const buttonContainer = document.getElementById("speech-button-container")
const button = document.createElement("button")
button.type="button"
button.id = "speak"
button.innerText = "Rop ut"
button.className = "speech__button"
buttonContainer.appendChild(button)

let getNumber;

export function initialize(getNumberFunction) {
    getNumber = getNumberFunction
}

function speakNumber() {
    let utterance = new SpeechSynthesisUtterance(getNumber());
    window.speechSynthesis.speak(utterance);
}
document.getElementById("speak").addEventListener("click", speakNumber);
