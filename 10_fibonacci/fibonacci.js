const fibonacci = function(fibonacciMember) {
    let fibonacciSequence = [0,1,1];
    if (fibonacciMember < 0){
        return 'OOPS';
    }
    for (let i = 3; i <= fibonacciMember; i++){
        fibonacciSequence[i] = fibonacciSequence[i-2] + fibonacciSequence[i-1];
    }
    return fibonacciSequence[fibonacciMember];
};  

// Do not edit below this line
module.exports = fibonacci;
