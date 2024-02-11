var audioFiles = ['http://localhost:8000/trimmed/0Winter-Wind - Evgeny Kissin.mp3',
'http://localhost:8000/trimmed/1Winter-Wind - Evgeny Kissin.mp3',
'http://localhost:8000/trimmed/2Winter-Wind - Evgeny Kissin.mp3',
'http://localhost:8000/trimmed/0Strausss Don Juan Horns Soli First Call.mp3',
'http://localhost:8000/trimmed/1Strausss Don Juan Horns Soli First Call.mp3',
'http://localhost:8000/trimmed/2Strausss Don Juan Horns Soli First Call.mp3',
'http://localhost:8000/trimmed/0Vivaldi Winter (Four Seasons RV 397) 3 Allegro.mp3',
'http://localhost:8000/trimmed/1Vivaldi Winter (Four Seasons RV 397) 3 Allegro.mp3',
'http://localhost:8000/trimmed/2Vivaldi Winter (Four Seasons RV 397) 3 Allegro.mp3',
'http://localhost:8000/trimmed/0Chopin - Fantaisie-Impromptu (Op 66).mp3',
'http://localhost:8000/trimmed/1Chopin - Fantaisie-Impromptu (Op 66).mp3',
'http://localhost:8000/trimmed/2Chopin - Fantaisie-Impromptu (Op 66).mp3',
'http://localhost:8000/trimmed/0Mozart ALLA TURCA from Sonata No 11 in A major K331  Tzvi Erez.mp3',
'http://localhost:8000/trimmed/1Mozart ALLA TURCA from Sonata No 11 in A major K331  Tzvi Erez.mp3',
'http://localhost:8000/trimmed/2Mozart ALLA TURCA from Sonata No 11 in A major K331  Tzvi Erez.mp3',
'http://localhost:8000/trimmed/0Bach Cello Suite No 1 in G Major Prélude (Official Video).mp3',
'http://localhost:8000/trimmed/1Bach Cello Suite No 1 in G Major Prélude (Official Video).mp3',
'http://localhost:8000/trimmed/2Bach Cello Suite No 1 in G Major Prélude (Official Video).mp3',
'http://localhost:8000/trimmed/0Liszt - La Campanella (100000 special).mp3',
'http://localhost:8000/trimmed/1Liszt - La Campanella (100000 special).mp3',
'http://localhost:8000/trimmed/2Liszt - La Campanella (100000 special).mp3'];

sitePrefix = 'http://localhost:8000/trimmed/';

rounds = 5;
window.roundNumber = 0;
window.score = 0;
let clonedFiles = JSON.parse(JSON.stringify(audioFiles));
var correct_button = getCorrectButton();

document.addEventListener('DOMContentLoaded', function () {
    loadButtons(correct_button);

    //set up button press
    const buttons = Array.from(document.querySelectorAll('.button'));

    // Loop through the array of buttons and add event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.target.id;
            console.log('Button with id ' + buttonId + ' was clicked');
            // Add your desired action here
            if (buttonId === correct_button) {
                console.log("Correct");
                alert("Correct!");
                window.score += 1;
             }
            else {
                console.log("Wrong");
                alert("Wrong!");
            }
            window.roundNumber += 1;
            loadButtons(getCorrectButton());
  });
});

});


function getCorrectButton() {
    correct_button_number = Math.floor(Math.random() * 3).toString();
    correct_button = 'button'.concat(correct_button_number);
    return correct_button
}
function loadButtons(correct_button) {
    if (roundNumber == rounds) {
        localStorage.setItem('score', window.score);
        localStorage.setItem('round', window.roundNumber);
        console.log(window.roundNumber);
        loadSeparateHTMLFile();
        return;
    }
    var buttons = Array.from(document.querySelectorAll('.button'));
    //set audio source to random file
    var audioPlayer = document.getElementById('audioPlayer');
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
    audioPlayer.src = audioFiles[randomIndex];
    audioFiles.splice(randomIndex, 1);

    //choose correct button
    document.getElementById(correct_button).textContent = formatButtonContent(audioPlayer.src);

    //format other buttons
    var used = [document.getElementById(correct_button).textContent];
    buttons.forEach(button => {
        if (button.id !== correct_button) {
            console.log(button.id);
            var randomIndex = Math.floor(Math.random() * clonedFiles.length);

            var chosenFiller = formatButtonContent(clonedFiles[randomIndex]);
            while (used.includes(chosenFiller)){
                var randomIndex = Math.floor(Math.random() * clonedFiles.length);
                var chosenFiller = formatButtonContent(clonedFiles[randomIndex]);
            }
            button.textContent = chosenFiller;
            used.push(chosenFiller);
        }
})
}

function formatButtonContent(audioSrc) {
    correct_button_content = audioSrc.replace(sitePrefix,'').replace('.mp3', '').slice(1);
    correct_button_content = correct_button_content.replace('ile:///', '').replace(/[0-9]/g, '');
    correct_button_content = correct_button_content.split('%').join(' ');

    return correct_button_content;
}

function loadSeparateHTMLFile() {
    window.location.href = 'EndGame.html';
  }