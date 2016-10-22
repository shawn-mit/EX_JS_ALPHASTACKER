// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//console.log(alphabet);
// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
   
    var alphaString = "";

   for (i = 0 ; i < alphabet.length; i ++){ 

   /* Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
    //console.log(alphabet[i]);
    // type of use to figure out what that javascript object is exactly? (variable, param , etc.)

    //modify alphString += alphabet[i], add to alphaString
    alphaString += alphabet[i];

    //console log each time the loop runs 
    //console.log(alphString);

    if (([i] + 1) % 3 ==== 0) {
    	alphaString += ""; 
    }

	}
        //console.log("Entire loop:" + alphaString);
}




// Invoke the function and pass in the array
stackLetters(alphabet)




