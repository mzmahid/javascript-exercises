const fibonacci = function(idx1Base) {
    if(idx1Base < 0) return "OOPS";
    if(idx1Base == 0) return 0;
    let fibs = [0, 1];
    for(let i = fibs.length - 1; i < idx1Base; i++){
        fibs.push(fibs[i -1] + fibs[i]);
    }
    return fibs.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
