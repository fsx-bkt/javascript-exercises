const repeatString = function(sentence, count) {
    if (count < 0){
        return "ERROR";
    }
    let newWord = "";
    for (i = 0; i < count; i++){
        newWord+= sentence;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
