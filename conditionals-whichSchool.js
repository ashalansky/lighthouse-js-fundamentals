const whichSchool = function(age) {
  if (age < 13) {
    return("Elementary School");
  }
  else if (age >= 13 && age <= 18) {
    return("Secondary School");
  }
  else {
    return("Lighthouse Labs");
  }
}
console.log(whichSchool(19));

for (var i=1; i < 101; i++){
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
