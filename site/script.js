var audioFiles = ['C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/0Winter-Wind - Evgeny Kissin.mp3',
'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/1Winter-Wind - Evgeny Kissin.mp3',
'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/2Winter-Wind - Evgeny Kissin.mp3',
'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/0Strausss Don Juan Horns Soli First Call.mp3',
'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/1Strausss Don Juan Horns Soli First Call.mp3',
'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/2Strausss Don Juan Horns Soli First Call.mp3']

let clonedFiles = JSON.parse(JSON.stringify(audioFiles));
var correct_button = getCorrectButton();

document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    playRandom();
    playButton.addEventListener('click', playRandom);
});

//set up button press
const buttons = Array.from(document.querySelectorAll('button'));
    // Loop through the array of buttons and add event listeners
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        const buttonId = event.target.id;
        console.log('Button with id ' + buttonId + ' was clicked');
        // Add your desired action here
        if (buttonId == correct_button) {
            console.log("Correct");
        }
        else {
            console.log("Wrong");
        }
        loadButtons(getCorrectButton);
      });
});

function getCorrectButton() {
    correct_button_number = Math.floor(Math.random() * 3).toString();
    correct_button = 'button'.concat(correct_button_number);
    return correct_button
}
function loadButtons(correct_button) {
    var buttons = document.querySelectorAll('button');
    //set audio source to random file
    var audioPlayer = document.getElementById('audioPlayer');
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
    audioPlayer.src = audioFiles[randomIndex];
    audioFiles.splice(randomIndex, 1);

    //choose correct button
    document.getElementById(correct_button).textContent = formatButtonContent(audioPlayer.src);

    //format other buttons
    buttons.forEach(button => {
        if (button.id !== correct_button) {
            var randomIndex = Math.floor(Math.random() * clonedFiles.length)
            button.textContent = clonedFiles[randomIndex];
        }
})
}

/*function playRandom() {
    if (audioFiles.length == 0) {
        console.log("out of files");
        return;
    }
  
    //set audio source to random file
    var audioPlayer = document.getElementById('audioPlayer');
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
    audioPlayer.src = audioFiles[randomIndex];
    audioFiles.splice(randomIndex, 1);

    //choose correct button
    correct_button_number = Math.floor(Math.random() * 3).toString()
    document.getElementById('button'.concat(correct_button_number)).textContent = formatButtonContent(audioPlayer.src);

}*/

function formatButtonContent(audioSrc) {
    correct_button_content = audioSrc.replace('C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/','').replace('.mp3', '').slice(1);
    correct_button_content = correct_button_content.replace('ile:///', '').replace(/[0-9]/g, '');
    correct_button_content = correct_button_content.split('%').join(' ');

    return correct_button_content;
}