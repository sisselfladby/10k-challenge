let number = parseInt(window.location.pathname) || 10000

const buttonContainer = document.getElementById("speech-button-container")
const button = document.createElement("button")
button.type="button"
button.id = "speak"
button.innerText = "Rop ut"
buttonContainer.appendChild(button)

function speakNumber() {
    let utterance = new SpeechSynthesisUtterance(number.toString());
    window.speechSynthesis.speak(utterance);
}
document.getElementById("speak").addEventListener("click", speakNumber);
