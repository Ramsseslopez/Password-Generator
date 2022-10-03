// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function generatePassword(chosenLength, lowercase, uppercase, numbers, special) {
  // initializing variables
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz"; // lower letters
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // upper letters
  var numberSelection = "0123456789"; // numbers
  var specialCharacters = " !\"#$ %& '()*+,-./:;<=>?@[\\]^_`{|}~"; // special characters
  var combined = ""; // holds the desired characters
  var generatedPassword; //  Generated password

  // if statements to build the combined characters
  if (lowercase) {
    combined += lowerLetters;
  }
  if (uppercase) {
    combined += upperLetters;
  }
  if (numbers) {
    combined += numberSelection;
  }
  if (special) {
    combined += specialCharacters;
  }
  // holder for the generated password
  generatedPassword = ""; 
  /* for loop to randomly generate the password using Math floor to round 
  * the random number to a whole number to get the correct chosen length */
  for (var i = 0; i < chosenLength; i++) {
    generatedPassword += combined.charAt(Math.floor(Math.random() * combined.length));
  }
  // returns the generated password
  return generatedPassword;
}

// function that writes the password and allows the prompts to be displayed
function writePassword() {
  // initialize variables
  var lowLength = 8; // smallest character number
  var upperLength = 128; // largest character number
  // undefined variables for the confirm functions below
  var lowercase, uppercase, numbers, special; 
  // undefined variables for the generatePassword and querySelector functions below
  var password, passwordText;
  //prompt that stores user's response in variable
  var chosenLength = prompt("Please enter a password length between " + lowLength + " and " + upperLength + "."); 
  
  /* if statement and while loop that make sure the chosen length is both a number 
  * and within the correct range of desired numbers and loops until user provides a valid response. */
  if (isNaN(chosenLength)) {
    chosenLength = -1;
  }
  while (chosenLength < lowLength || chosenLength > upperLength) {
    alert("Please enter a valid number.") + chosenLength; // notifies user to provide a valid number
    // prompts user to provide a proper password length again
    chosenLength = prompt("Please enter a proper password length between 8 and 128 characters:",
                          "Enter character length here.");
    if (isNaN(chosenLength)) {
      chosenLength = -1;
    }
  }
  // confirm functions that ask the user to choose their password characters using true/false logic
  lowercase = confirm("Do you want lowercase letters?");
  uppercase = confirm("Do you want uppercase letters?");
  numbers = confirm("Do you want numbers?");
  special = confirm("Do you want special characters?");

  
  
  if (!(lowercase || uppercase || numbers || special)) {
    alert("No characters types were provided. No password generated.\n" +
          "Please run again.");      
  } else {
    // generate password function that stores the user's input
    password = generatePassword(chosenLength, lowercase, uppercase, numbers, special);
    // alerts the user the password has been copied
    alert("Password has been copied: " + password);
    // ties the generated password to the javascript
    passwordText = document.querySelector("#password");
    // displays the password on the HTML page
    passwordText.value = password;

    // added function that selects password and copies password
    passwordText.select();
    document.execCommand("copy");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



