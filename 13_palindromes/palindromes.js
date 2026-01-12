const palindromes = function (str) {
    let n_str = str
    .split("")
    .filter( (i) => {
            if( i == " " || i == "!" || i == "." || i == ",") return false;
            else return true;
        })
    .join("");
    for(let i = 0 ; i < n_str.length / 2 ; i++) {
        if(n_str[i].toLowerCase() != n_str[n_str.length - i - 1].toLowerCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
