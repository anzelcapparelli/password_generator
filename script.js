// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";
var upprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~";
var do_uppr = false;
var do_special = false;

console.log(special[25]);
console.log(special.length);


function randLwr() {
  var pick = lwrcase[Math.floor(Math.random() * 26)];
  return pick;
}
function randUppr() {
  var pick = upprcase[Math.floor(Math.random() * 26)];
  return pick;
}
function randSpecial() {
  var pick = lwrcase[Math.floor(Math.random() * 33)];
  return pick;
}



function generatePassword() {

  var pwd_lngth = parseInt(prompt("Please choose a password character length"));
  while (!(pwd_lngth >= 8 && pwd_lngth <= 128)) {

    alert("Password must be no less than 8 characters and no more than 128 characters");

    pwd_lngth = parseInt(prompt("Please choose a password character length within the accepted range"));

  }

  do_uppr = confirm("Include capitalized letters?");        // determining if to include uppercase in randomization
  do_special = confirm("Include special characters?");        // determining if to include special characters in randomization

  var pwd = [];

  for (i = 0; i < pwd_lngth; i++) {


    if (do_uppr && do special) {

      var list_chooser = Math.floor(Math.random() * 3)

      if (list_chooser === 0) {
        pwd.push(randLwr); //adding to end of pwd array, a rand entry from lwrcase
      }
      if (list_chooser === 1) {
        pwd.push(randUppr); //adding to end of pwd array, a rand entry from lwrcase
      }
      if (list_chooser === 2) {
        pwd.push(randLwr); //adding to end of pwd array, a rand entry from lwrcase
      }
    }

  }

  var cat_pwd = pwd.join('');
  return cat_pwd

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
