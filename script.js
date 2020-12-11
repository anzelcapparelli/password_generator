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
  var cat_length = 26;    //min length due to lwrcase

  var cat_list = lwrcase;      //the combined list we will be adding each included character refence array to; allows each character to have an equal chance in the selection
  //even if user selects no for all additional characters, lowercase refence is default

  pwd.push(lwrcase[Math.floor(Math.random() * lwrcase.length)]);      // puts random lowercase at beginning of list; ensures one of this char type in password
  var xtra_lists = 1;     // counter that reduces the number of times pushed by number of lists chosen (allows a push in each list before pooling to ensure at least one char from the list is in password)


  if (do_num) {                                    //if numbers are allowed, add it to default reference list
    cat_list = cat_list + num;
    cat_length = cat_length + num.length;           //add length to default length (allows access via index to each entry in combined list)
    pwd.push(num[Math.floor(Math.random() * num.length)]);      // puts random number at first availability of list; ensures one of this char type in password
    xtra_lists++;
  }

  if (do_uppr) {                                  //if uppercase letters are allowed, add reference to combined reference list
    cat_list = cat_list + upprcase;
    cat_length = cat_length + upprcase.length;    //add length to combined list length (allows access via index to each entry in combined list)
    pwd.push(upprcase[Math.floor(Math.random() * upprcase.length)]);      // puts random uppercase letter at first availability of list; ensures one of this char type in password
    xtra_lists++;
  }

  if (do_special) {                               //if uppercase letters are allowed, add reference to combined reference list
    cat_list = cat_list + special;
    cat_length = cat_length + special.length;     //add length to combined list length (allows access via index to each entry in combined list)
    pwd.push(special[Math.floor(Math.random() * special.length)]);      // puts random uppercase letter at first availability of list; ensures one of this char type in password
    xtra_lists++;
  }


  for (xtra_lists; xtra_lists < pwd_lngth; xtra_lists++) {                               //random generation and storage!


    pwd.push(cat_list[Math.floor(Math.random() * cat_length)]);   //adding to end of pwd array, a rand entry from combined reference list
  }

var unswitched_end = pwd.length;    // establishing an index to target last unshuffled entry in array
while (unswitched_end > 0){
  var switch_index = Math.floor(Math.random()*unswitched_end)     // randomly generating a location to switch entry with; 
                                                                  //excluding locations that have 100% certainty already switched
  unswitched_end --;                        // currently switching the end; next unswitched index is one earlier (also allows unswitched_end to be used as index)

  shuffle_holder = pwd[unswitched_end];       //assigns the character in the regular index to an external variable
  pwd[unswitched_end] = pwd[switch_index];    //replaces the character in the regular index with the randomly selected array entry
  pwd[switch_index] = shuffle_holder;         //places original character in the randomly selected array entry 
}                                             //continues until all entries in array have undergone at least one switching action
  
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
