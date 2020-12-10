// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";
var upprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~";
var num = "0123456789";
var do_num = false;
var do_uppr = false;
var do_special = false;



function generatePassword() {

  var pwd_lngth = parseInt(prompt("Please choose a password character length"));

  while (!(pwd_lngth >= 8 && pwd_lngth <= 128)) {

    alert("Password must be no less than 8 characters and no more than 128 characters");

    pwd_lngth = parseInt(prompt("Please choose a password character length within the accepted range"));

  }

  do_num = confirm("Include numbers?");                        // determining if to include numbers in randomization
  do_uppr = confirm("Include capitalized letters?");           // determining if to include uppercase in randomization
  do_special = confirm("Include special characters?");         // determining if to include special characters in randomization

  var pwd = [];           //the empty array that will be catching the randomly generated characters to eventually make the password
  var cat_list = [];      //the empty list we will be adding each included character refence array to; allows each character to have an equal chance in the selection
  var cat_length = 26;    //min length due to lwrcase


  if (do_num) {                                    //if numbers are allowed, add it to default reference list
    cat_list = lwrcase + num;
    cat_length = cat_length + num.length           //add length to default length (allows access via index to each entry in combined list)
  }

  if (do_uppr) {                                  //if uppercase letters are allowed, add reference to combined reference list
    cat_list = cat_list + upprcase;
    cat_length = cat_length + upprcase.length;    //add length to combined list length (allows access via index to each entry in combined list)
  }

  if (do_special) {                               //if uppercase letters are allowed, add reference to combined reference list
    cat_list = cat_list + special;
    cat_length = cat_length + special.length;     //add length to combined list length (allows access via index to each entry in combined list)
  }


  for (i = 0; i < pwd_lngth; i++) {                               //random generation and storage!


    pwd.push(cat_list[Math.floor(Math.random() * cat_length)]);   //adding to end of pwd array, a rand entry from combined reference list
  }

  var cat_pwd = pwd.join('');                     //joins individual values in array into single string
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
