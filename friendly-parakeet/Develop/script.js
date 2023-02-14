// Assignment code here
// 1. Promt the user for password criteria
 //    a.Password lenght 8 < 128
 //    b. Lowercase, Uppercase, Numbers, Special characters
 // 2. Validate the input
 // 3. Generate password based on criteria 
 // 4. Display password on the page
//  GIVEN I need a new, secure password
 var choiceArr = [];

 var specialCharArr = ['!','@','#','$','%','&','*','(',')','_','-','/',];
 var lowercaseCharArr = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
 var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','P','Q','R','S','T','U','V','W','X','Y','Z',];
 var numberArr = ['0','1','2','3','4','5','6','7','8','9',];


// step one:
//  WHEN I click the button to generate a password
//  THEN I am presented with a series of prompts for password criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  step two:
//  WHEN prompted for password criteria
//  THEN I select which criteria to include in the password

function generatePassword(){
  

  // step three:
//  WHEN prompted for the length of the password
//  THEN I choose a length of at least 8 characters and no more than 128 characters

function getPromts(){
  
}

var characterLength = parseInt(prompt('Please enter a password with more than 8 characters and less than 128 characters'));
if (isNaN(characterLength)||characterLength < 8 || characterLength > 128 ) {
  alert('character length has to be a number, 8 - 128 digits. Please try again.');
  return false;
}
if (confirm('would you like lowercase letters in your password?')){

}
  choiceArr = choiceArr.concat(lowercaseArr);

if (confirm('would you like upperrcase letters in your password?')){

}

    choiceArr = choiceArr.concat(uppercaseArr);

if (confirm('would you like special characters in your password?')){

}
      choiceArr = choiceArr.concat(specialCharacterArr);

if (confirm('would you like numbers in your password?')){
        choiceArr = choiceArr.concat(numberArr);
        return true;

}
// step four:
//  WHEN asked for character types to include in the password
//  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// step five:
//  WHEN I answer each prompt
//  THEN my input should be validated and at least one character type should be selected

// step six:
//  WHEN all prompts are answered
//  THEN a password is generated that matches the selected criteria

  

  

  return "Generated password wll go here"
}




// step seven:
//  WHEN the password is generated
//  THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







 










