const removeFromArray = function(arr, ...n) {
    n.forEach((item) => {
        for(let i = 0 ; i < arr.length ; i++) {
            if(arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
