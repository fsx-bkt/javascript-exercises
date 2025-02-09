const findTheOldest = function(peopleObjectArray) {
    let sortedArray = peopleObjectArray.slice();
    let currentYear = new Date().getFullYear();
    sortedArray.sort((a,b) => ((a.yearOfDeath || currentYear)  - a.yearOfBirth) - ((b.yearOfDeath || currentYear)- b.yearOfBirth));
    return sortedArray[sortedArray.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
