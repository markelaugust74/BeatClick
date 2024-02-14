// Define an object to map button IDs to sound URLs
const soundMap = {
    button1: '1.wav',
    button2: '2.wav',
    button3: '3.wav',
    button4: '4.wav',
    button5: '5.wav',
    button6: '6.wav',
    button7: '7.wav',
    button8: '8.wav',
    button9: '9.wav',
    // Add more buttons and their corresponding sound URLs here
};

// Function to play a sound based on the button ID
function playSound(buttonId) {
    const soundUrl = soundMap[buttonId];
    if (soundUrl) {
        const audio = new Audio(soundUrl);
        audio.play();
    }
}

// Add event listeners to each button
document.getElementById('1').addEventListener('click', () => {
    playSound('button1');
});

document.getElementById('2').addEventListener('click', () => {
    playSound('button2');
});

document.getElementById('3').addEventListener('click', () => {
    playSound('button3');
});

document.getElementById('4').addEventListener('click', () => {
    playSound('button4');
});

document.getElementById('5').addEventListener('click', () => {
    playSound('button5');
});

document.getElementById('6').addEventListener('click', () => {
    playSound('button6');
});

document.getElementById('7').addEventListener('click', () => {
    playSound('button7');
});

document.getElementById('8').addEventListener('click', () => {
    playSound('button8');
});

document.getElementById('9').addEventListener('click', () => {
    playSound('button9');
});

// Add more event listeners for additional buttons
