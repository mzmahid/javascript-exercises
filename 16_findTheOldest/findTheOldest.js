const findTheOldest = function(ppl) {
    let dateObj = new Date();
    ppl.sort((a, b) => {
        let ageA = ((a.yearOfDeath)? a.yearOfDeath : dateObj.getFullYear()) - (a.yearOfBirth);
        let ageB = ((b.yearOfDeath)? b.yearOfDeath : dateObj.getFullYear()) - (b.yearOfBirth);
        return ageB - ageA;
    });
    return ppl[0];
};

// Do not edit below this line
module.exports = findTheOldest;
