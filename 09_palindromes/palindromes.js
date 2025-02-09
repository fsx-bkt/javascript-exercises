const palindromes = function (palindromeString) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanPalindromString = 
    palindromeString.toLowerCase()
    .split('')
    .filter(
        (letter) => alphanumerical.includes(letter)
    )
    .join('');

    let reverseCleanPalindromString =  cleanPalindromString.split('').reverse().join('');
    return reverseCleanPalindromString === cleanPalindromString;
};

// Do not edit below this line
module.exports = palindromes;
