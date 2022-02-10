const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b){
      const getAge = function(birth, death) {
        if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
      };
      
      const lastPerson = getAge(a.yearOfBirth, a.yearOfDeath);
      const nextPerson = getAge(b.yearOfBirth, b.yearOfDeath);
      return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
  }

// Do not edit below this line
module.exports = findTheOldest;
