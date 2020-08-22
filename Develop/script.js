// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyClipboard = document.querySelector("#copy");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

//copy to clipboard function
function copyToClipboard () {
  passwordText.select();
  document.execCommand('copy');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyClipboard.addEventListener("click", copyToClipboard);

// Declare our character options in an object
let sets = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", 'i', "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", 'I', "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChars: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
};

//when we call the generatePassword function...
function generatePassword() {
  var passwordChars = [];
  var availableChars = [];
  //asking for the length you would like
  let length = parseInt(prompt("How long do you want the password to be? 8-128"));
  //checking if your length is withing 8-128
  if (length >= 8 && length <= 128) {
    //asking for your paramaters
    let lowercase = confirm("Do you want to include lowercase letters?");
    let uppercase = confirm("Do you want to include CAPITAL letters?");
    let numbers = confirm("Do you want to include numbers?");
    let special = confirm("Do you want to include special characters?");
    //asking if you want lowercase
    if (lowercase) {
      //adds 1 random index from lowercase to the password characters
      passwordChars.push(sets.lowercase[randomCharSelector(0, sets.lowercase.length)]);
      //adds the entire lowercase array to available characters
      availableChars = availableChars.concat(sets.lowercase);
    }
    //asking if you want uppercase
    if (uppercase) {
      //adds 1 random index from uppercase to the password characters
      passwordChars.push(sets.uppercase[randomCharSelector(0, sets.uppercase.length)]);
      //adds the entire uppercase array to available characters
      availableChars = availableChars.concat(sets.uppercase);
    }
    //asking if you want numbers
    if (numbers) {
      //adds 1 random index from numbers to the password characters
      passwordChars.push(sets.numbers[randomCharSelector(0, sets.numbers.length)]);
      //adds the entire numbers array to available characters
      availableChars = availableChars.concat(sets.numbers);
    }
    //asking if you want special characters
    if (special) {
      //adds 1 random index from special to the password characters
      passwordChars.push(sets.specialChars[randomCharSelector(0, sets.specialChars.length)]);
      //adds the entire special characters array to available characters
      availableChars = availableChars.concat(sets.specialChars);
    }
    //checks if the password characters length is equal to the length set by user
    //if it is not then it will fill in characters to meet the length from the available characters array
    if (passwordChars.length < length) {
      for(var i = 0; passwordChars.length < length; i++){
        passwordChars.push(availableChars[randomCharSelector(0, availableChars.length)]);
      }
    }
    //makes the password characters array turn into a string
    let finalPassword = passwordChars.join("");

    //console logs all of the options into the console for debugging
    console.log("Selected Length: " + length);
    console.log("Include lowercase = " + lowercase);
    console.log("Include uppercase = " + uppercase);
    console.log("Include numbers = " + numbers);
    console.log("Include special characters = " + special);
    console.log("The final password came out to: " + finalPassword);
    //returns final password and inputs to the page
    return finalPassword;
    //if the length is not equal it will alert you to retry
  } else {
    alert("Please use a length between 8 - 128");
  }
}
//a random number function that will take in  min and  max
function randomCharSelector(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}






