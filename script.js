// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";
var upprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~";
var num = "0123456789";
var do_num = false;
var do_uppr = false;
var do_special = false;

console.log(special[25]);
console.log(special.length);


// function randLwr() {
//   var pick = lwrcase[Math.floor(Math.random() * 26)];

// }
// function randUppr() {
//   var pick = upprcase[Math.floor(Math.random() * 26)];

// }
// function special() {
//   var pick = special[Math.floor(Math.random() * 33)];

// }



function generatePassword() {

  var pwd_lngth = parseInt(prompt("Please choose a password character length"));

  while (!(pwd_lngth >= 8 && pwd_lngth <= 128)) {

    alert("Password must be no less than 8 characters and no more than 128 characters");

    pwd_lngth = parseInt(prompt("Please choose a password character length within the accepted range"));

  }

  do_num = confirm("Include numbers?");        // determining if to include numbers in randomization
  do_uppr = confirm("Include capitalized letters?");        // determining if to include uppercase in randomization
  do_special = confirm("Include special characters?");        // determining if to include special characters in randomization

  var pwd = [];
  var cat_list = [];
  var cat_length = 26;    //min length due to lwrcase


  if (do_num) {
    cat_list = lwrcase + num;
    cat_length = cat_length + num.length
  }

  if (do_uppr) {     //lower and uppercase only
    cat_list = cat_list + upprcase;
    cat_length = cat_length + upprcase.length;
  }

  if (do_special) {     //lower and uppercase only
    cat_list = cat_list + special;
    cat_length = cat_length + special.length;
  }

  console.log(cat_list);
  console.log(cat_length);


  for (i = 0; i < pwd_lngth; i++) {         //random generation and storage!


    pwd.push(cat_list[Math.floor(Math.random() * cat_length)]); //adding to end of pwd array, a rand entry from special
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
