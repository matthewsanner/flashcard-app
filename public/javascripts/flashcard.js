let currentIndex = 0;
let flashcards = document.querySelectorAll('.flashcard');

//hide all flashcards initially
if (flashcards[currentIndex]) {
    for (var i = 0; i < flashcards.length; i++) {
        flashcards[i].style.display = "none";
    }
}

//display the first flashcard
if (flashcards[currentIndex]) {
    flashcards[currentIndex].style.display = "block";
}

//event listener for next button
if (flashcards[currentIndex]) {
    document.getElementById('flashcard-forward').addEventListener('click', function () {
        flashcards[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % flashcards.length;
        flashcards[currentIndex].style.display = "block";
    });
}

//event listener for prev button
if (flashcards[currentIndex]) {
    document.getElementById('flashcard-backward').addEventListener('click', function () {
        flashcards[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
        flashcards[currentIndex].style.display = "block";
    });
}

//event listener for flashcard clicks
if (flashcards[currentIndex]) {
    // for (var i = 0; i < flashcards.length; i++) {
    //     flashcards[i].addEventListener('click', function () {
    //         this.querySelector('.front').classList.toggle('hidden');
    //         this.querySelector('.back').classList.toggle('hidden');
    //     });
    // }
    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    });
}

// let flashcardFlip = document.getElementById('flashcard-flip');
// let flashcardForward = document.getElementById('flashcard-forward');
// let flashcardBackward = document.getElementById('flashcard-backward');

// flashcardFlip.addEventListener('click', flipFlashcard);
// flashcardForward.addEventListener('click', forwardFlashcard);
// flashcardBackward.addEventListener('click', backwardFlashcard);

// function flipFlashcard() {
//     if (flashcardSide == 'front') {
//         flashcardSide = 'back';
//     }
//     if (flashcardSide == 'back') {
//         flashcardSide = 'front';
//     }
//     console.log(flashcardSide)
// }
// function forwardFlashcard() {
//     flashcardNum += 1;
//     console.log(flashcardNum)
// }
// function backwardFlashcard() {
//     flashcardNum -= 1;
//     console.log(flashcardNum)
// }