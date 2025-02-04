const removeFromArray = function(array, ...numberToRemove) {
    let newArray = array.filter(number => !numberToRemove.includes(number));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
