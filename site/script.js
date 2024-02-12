var audioFiles = ['http://localhost:8000/trimmed/0Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/1Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/2Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/0Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/1Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/2Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/0Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/1Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/2Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/0Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/1Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/2Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/0Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/1Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/2Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/0Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/1Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/2Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/0Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/1Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/2Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/0Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/1Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/2Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/0Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/1Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/2Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/0Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/1Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/2Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/0Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/1Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/2Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/0Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/1Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/2Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/0STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/1STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/2STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/0Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/1Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/2Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/0Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/1Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/2Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/0Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/1Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/2Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/0Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/1Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/2Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/0Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/1Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/2Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/0Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/1Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/2Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/0Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/1Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/2Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/0Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/1Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/2Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/0Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/1Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/2Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/0Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/1Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/2Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/0Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3',
'http://localhost:8000/trimmed/1Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3',
'http://localhost:8000/trimmed/2Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3',
'http://localhost:8000/trimmed/0Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/1Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/2Dmitri Shostakovich - Waltz No 2.mp3',
'http://localhost:8000/trimmed/0Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/1Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/2Mozart - Requiem.mp3',
'http://localhost:8000/trimmed/0Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/1Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/2Tchaikovsky - 1812 Overture (Full with Cannons).mp3',
'http://localhost:8000/trimmed/0Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/1Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/2Tschaikowsky 5 Sinfonie ∙ hr-Sinfonieorchester ∙ Manfred Honeck.mp3',
'http://localhost:8000/trimmed/0Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/1Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/2Tchaikovsky Piano Concerto No 1 FULL  Martha Argerich piano - Charles Dutoit conductor.mp3',
'http://localhost:8000/trimmed/0Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/1Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/2Tschaikowsky 6 Sinfonie (»Pathétique«) ∙ hr-Sinfonieorchester ∙ Lionel Bringuier.mp3',
'http://localhost:8000/trimmed/0Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/1Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/2Pavane pour une infante défunte M 19.mp3',
'http://localhost:8000/trimmed/0Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/1Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/2Franz Liszt - Un Sospiro.mp3',
'http://localhost:8000/trimmed/0Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/1Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/2Franz Liszt - Liebestraum - Love Dream.mp3',
'http://localhost:8000/trimmed/0Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/1Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/2Hamelin plays Liszt - Hungarian Rhapsody No2 [HIGH QUALITY].mp3',
'http://localhost:8000/trimmed/0Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/1Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/2Chopin - Fantaisie Impromptu Op 66 (Rubinstein).mp3',
'http://localhost:8000/trimmed/0Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/1Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/2Sibelius Symphony No 5  P Järvi · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/0STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/1STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/2STRAUSS R Horn Concerto No 2 in E flat major  Brain · Sawallisch · Philharmonia Orchestra.mp3',
'http://localhost:8000/trimmed/0Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/1Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/2Mahlers 1st Symphony Titan (Audio + Score).mp3',
'http://localhost:8000/trimmed/0Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/1Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/2Schubert - Serenade.mp3',
'http://localhost:8000/trimmed/0Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/1Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/2Schubert - Ave Maria.mp3',
'http://localhost:8000/trimmed/0Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/1Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/2Schumann Concert Piece for four horns  Rattle · Berliner Philharmoniker.mp3',
'http://localhost:8000/trimmed/0Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/1Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/2Schumann Piano Quartet No 1  Daishin Kashimoto Gilad Karni Sol Gabetta Nelson Goerner.mp3',
'http://localhost:8000/trimmed/0Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/1Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/2Pietro Mascagni Cavalleria rusticana - Intermezzo.mp3',
'http://localhost:8000/trimmed/0Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/1Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/2Scherzo-tarantelle Op 16.mp3',
'http://localhost:8000/trimmed/0Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/1Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/2Mozart - Lacrimosa.mp3',
'http://localhost:8000/trimmed/0Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/1Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/2Saint-Saens  The Swan ( Le Cygne )  - Carnival of the Animals.mp3',
'http://localhost:8000/trimmed/0Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/1Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/2Jean Sibelius Symphony No 5.mp3',
'http://localhost:8000/trimmed/0Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3',
'http://localhost:8000/trimmed/1Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3',
'http://localhost:8000/trimmed/2Mahler - Symphony No5 - Abbado - Lucerne Festival Orchestra 2004.mp3'];

sitePrefix = 'http://localhost:8000/trimmed/';

rounds = 5;
window.roundNumber = 0;
window.score = 0;
let clonedFiles = JSON.parse(JSON.stringify(audioFiles));
var correct_button = getCorrectButton();

document.addEventListener('DOMContentLoaded', function () {
    loadButtons(correct_button);

    //set up button press
    const buttons = Array.from(document.querySelectorAll('button'));
    const feedbackText = document.getElementById('feedbackText');

    // Loop through the array of buttons and add event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.target.id;
            console.log('Button with id ' + buttonId + ' was clicked');
            // Add your desired action here
            if (buttonId === correct_button) {
                feedbackText.textContent = "Correct!";
                feedbackText.classList.remove('wrong');
                feedbackText.classList.add('correct');
                window.score += 1;
             }
            else {
                feedbackText.textContent = "Wrong!";
                feedbackText.classList.remove('correct');
                feedbackText.classList.add('wrong');
            }
            //Wait, then make text disappear
            setTimeout(() => {
                feedbackText.textContent = "";
                feedbackText.classList.remove('correct', 'wrong');
            }, 1000);
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
    var buttons = Array.from(document.querySelectorAll('button'));
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
    setTimeout(function() {
        window.location.href = 'EndGame.html';
    }, 1000)
  }

