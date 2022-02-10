const findTheOldest = function(people) {
    const ordered = people.sort((a, b) => a.yearOfBirth > b.yearOfBirth ? 1: -1);
    return ordered;
};

// Do not edit below this line
module.exports = findTheOldest;
