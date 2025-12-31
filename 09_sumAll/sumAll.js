const sumAll = function(a, b) {
    sum = 0;
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    if(a > b) {
        [up, down] = [a, b];
    }
    else {
        [up, down] = [b, a];
    }
    for(let i = down ; i <= up ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
