// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";






// trying to see if this runs



function generatePassword(pwd_lngth) {
 
  console.log(pwd_lngth);

  var pwd = [];

  // for (i = 0; i < 8; i++) {
  //   pwd[i] = lwrcase[Math.floor(Math.random() * 26)];
  // }

  for (i = 0; i < pwd_lngth; i++) {
    pwd.push(lwrcase[Math.floor(Math.random() * 26)]);    //adding to end of pwd array, a rand entry from lwrcase
  }

  var cat_pwd = pwd.join('');

  console.log(pwd);
  console.log(cat_pwd);
  console.log(pwd_lngth);

  return cat_pwd
}

// NEED TO FIGURE OUT HOW TO RESET ARRAY SIZE


// Write password to the #password input
function writePassword() {                                                                              //FIRST

  var pwd_lngth = parseInt(prompt("Please choose a password character length"));
  while (!(pwd_lngth >= 8 && pwd_lngth <= 128)) {

    alert("Password must be no less than 8 characters and no more than 128 characters");

    pwd_lngth = parseInt(prompt("Please choose a password character length within the accepted range"));

console.log(pwd_lngth)

    generatePassword(pwd_lngth);
  }

  // ^^^ gets proper password length 

  var password = generatePassword();    //randomizes password for that length

  var passwordText = document.querySelector("#password");   //passwordText is what's in card

  passwordText.value = password;  //updates card so it matches the password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);