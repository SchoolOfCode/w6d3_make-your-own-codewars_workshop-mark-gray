/*
----------Ceasar Cipher Machine----------

    From wikipedia: 
    In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

    Make a Ceasar Cipher encrypter that takes in a word and right shifts each letter by 2:
            A >> C
            D >> F
            E >> G
            Q >> S
            dog >> fqi
            unicorn >> wpkeqtp
            shrew >> ujtgy

    The function should take in a string as the first parameter and a second boolean "mode" parameter
    When mode is true, encrypt the word
    When mode is false decrypt the word by left shifting by two:
            fqi >> dog
            wpkeqtp >> unicorn
            ujtgy >> shrew

    Sometimes, shifting by 2 is not possible (right shifting y and z and left shfiting a and b), so the function should wrap around the alphabet:
            y >> a
            z >> b
            a << y
            b << z


    The output should always be in lowercase, ignoring capilisation in the input.
    The input will never have spaces, numbers or non a-z characters.


    Have fun :D 

*/
// 65 = A
export function getEncodedWord(word, modeAsBoolean) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
}

//console.log(getEncodedWord("dave",true))
