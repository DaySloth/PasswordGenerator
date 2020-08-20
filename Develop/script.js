// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  // Add Variables for password
  let lowercase = ["a","b","c","d","e","f","g","h",'i',"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let capitalize = ["A","B","C","D","E","F","G","H",'I',"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  let specialChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
  let passwordValue = "";
  let values = [];

  // Prompt for requirements
  let passwordLength = prompt("How long do you want the password to be? 8 - 128");
  let wantLowercase = confirm("Do you want to include lowercase letters?");
  let wantCapitalize = confirm("Do you want to include CAPITAL letters?");
  let wantNumbers = confirm("Do you want to include numbers?");
  let wantSpecialChar = confirm("Do you want to include special characters?");

  //if they want all selections
  if (wantLowercase) {
    values = values.concat(lowercase);
  }
  if (wantCapitalize) {
    values = values.concat(capitalize);
  }
  if (wantNumbers) {
    values = values.concat(numbers);
  }
  if (wantSpecialChar) {
    values = values.concat(specialChar);
  }
  for(var i = 0; i < passwordLength; i++) {
    num = Math.floor(Math.random() * values.length);
    passwordValue = passwordValue + values[num];
  }
  console.log(values);

  return passwordValue;

}





