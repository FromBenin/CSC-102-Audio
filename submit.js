// My function written below is to determine if the word/phrase written in the form is a palindrome or not, the function is called PALINDROME().
function PALINDROME() {
    // I created a variable named string which gets the word/phrase written in the form by using the id assigned to it.
    var string = document.getElementById("string").value;
    // Then I created a another variable which removes all non-alphanumeric characters and convert the remaining characters to lowercase.
    var replacePal = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // I later added a splitStr, a reverseStr and a joinStr variable which splits, reverses and joins the result of the replaceStr variable.
    var splitPal = replacePal.split("");
    var reversePal = splitPal.reverse();
    var joinPal = reversePal.join("");
    // The final variable I created is used to display the result of the form.
    var result = "";

    while (true) {
        // First call the string variable.
        string;
        // And the replacePal variable.
        replacePal;

        // This if statement will only executes if the string variable is empty when the form if being submitted.
        if (string == "") {
            result = "Give an input";
            Sound();
            break;
        }
        // I then added an else if statement which will execute if the replacePal variable is not equal to the joinPal variable.
        else if (replacePal !== joinPal) {
            result = "The word, phrase or sequence written above is not a palindrome.";
            stopSound();
            break;
        }
        // I ended the else if statement with an else statement which executes if the else if condition is not true.
        else {
            result = "The word, phrase or sequence written above is a palindrome.";
            // This will call the playSound() function and play a sound if the word/phrase written is a palindrome.
            playSound();
            audio.pause();
            // This will change the message on the play sound button.
            document.getElementById("playbtn").innerHTML = "Well done!";
            break;
        }
    }

    // The next line of code I wrote is to display the result of the form after accepting the input.
    document.getElementById("result").innerHTML = result;
}

// I created a sound variable to use in my playSound() and stopSound() functions.
var sound;

var audio;

// The playSound() function plays an audio file in my webpage using the sound variable.
function playSound() {
    document.getElementById("playbtn").disabled = true; // Disables the start button

    document.getElementById("stopbtn").disabled = false;  // Enables the stop button

    // I will first get the id of the audio tag in my html.
    sound = document.getElementById("sound");
    // Then I will assign the play function to my sound variable.    
    sound.play();
    audio.pause();
    // And lastly, the message on the play button will change when clicked.
    document.getElementById("playbtn").innerHTML = "Audio is Playing";
}

// The stopSound() function stops playing the audio in my webpage.
function stopSound() {
    document.getElementById("stopbtn").disabled = true; // This disables the stop button

    document.getElementById("playbtn").disabled = false;  // This enables the start button

    // Again, I will get the id of the html audio tag.
    sound = document.getElementById("sound");
    document.getElementById("audio");
    // I assigned the pause function to my sound variable which pauses the sound when the stop button is clicked.
    sound.pause();
    audio.pause();
    // This will change back the message on the play button.
    document.getElementById("playbtn").innerHTML = "Click to hear an applause";
}

function Sound() {
    audio = document.getElementById("audio");
    audio.play();
}