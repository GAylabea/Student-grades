  /*Started with each grade as 0 to set up my counters*/
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

var gradesWithValues = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Each if statement represents the grade ranges - the variables are getting filled by the ++
// this is the counter feature

for (var i = 0; i <= 12; i++) {
  if(gradesWithValues[i]> 91 && gradesWithValues[i] < 101) {
    gradeA++;
  }  if(gradesWithValues[i]> 81 && gradesWithValues[i] < 91) {
    gradeB++;
  }  if(gradesWithValues[i]> 71 && gradesWithValues[i] < 81) {
    gradeC++;
  }  if(gradesWithValues[i]> 61 && gradesWithValues[i] < 71) {
    gradeD++;
  }  if(gradesWithValues[i] < 61) {
    gradeF++;
  }
}

console.log("The class scored this many A's: " + gradeA);
console.log("The class scored this many B's: " + gradeB);
console.log("The class scored this many C's: " + gradeC);
console.log("The class scored this many D's: " + gradeD);
console.log("The class scored this many F's: " + gradeF);

// Next to find lowest and highest grades, we used the sort method as in ".sort" to tell the computer to list 
// all of the grades in order - taking out the first in the index 0 and the last - 11

var sortGrades = gradesWithValues.sort(function(a, b){return a-b}); 
console.log(sortGrades);
console.log("This is the lowest grade. " + sortGrades[0]);
console.log("This is the hightest grade. " + sortGrades[11]);





