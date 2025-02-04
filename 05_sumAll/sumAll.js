const sumAll = function(a, b) {
    if(a < 0 || b < 0){
        return "ERROR";
    }
    if(a % 1 !== 0 || b % 1 !== 0 ){
        return "ERROR";
    }
    if(typeof(a) !== "number" || typeof(b) !== "number"){
        return "ERROR";
    }
    
    let sum = 0;
    const high = Math.max(a,b);
    let low = Math.min(a,b);
    for(;low <= high; low++){
        sum += low;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
