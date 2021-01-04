const morseCodeRef = {
    ".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G","....": "H","..": "I",".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T","..-": "U","...-": "V",
".--": "W","-..-": "X","-.--": "Y","--..": "Z","-----": "0",".----": "1","..---": "2","...--": "3","....-": "4",".....": "5","-....": "6","--...": "7","---..": "8","----.": "9"
}
const outPut = document.getElementsByClassName("output")[0];
const button = document.getElementsByClassName("button")[0];
const decodeMorse = (morseCode) => {
    let morseCodeWords = morseCode.split("   ");
    let letter = []
    let str = []
    for (i=0; i < morseCodeWords.length; i++) {
        letter = morseCodeWords[i].split(" ");
        for (j=0; j < letter.length; j++) {
            letter[j] = morseCodeRef[letter[j]];
        }
        morseCodeWords[i] = letter.join("");
    }
    str = morseCodeWords.join(" ");
    outPut.innerHTML = str;
}

button.addEventListener("click", () => {
    console.log(document.getElementsByClassName("textBox")[0].value);
    decodeMorse(document.getElementsByClassName("textBox")[0].value);
})