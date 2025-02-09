const palindromes = function (palindromeString) {
    palindromeString.toLowerCase();
    palindromeString.filter(
        (letter) => z
    )
    let reverseString = palindromeString.split('').reverse().join('').toLowerCase();;
    for (let i = 0; i < reverseString.length; i++){
        if (reverseString[i] !== palindromeString[i]){
            return false;
            break;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
