function convertToGradeObjectForIn(arr){
  var output = [];
  var letterGrades = {
    "A": 90,
    "B": 80,
    "C": 70,
    "D": 60,
    "F": 0
  }
  for (prop in letterGrades){
    for (var i = 0; i < arr.length; i++){
      if (arr[i] >= letterGrades[prop]){
        output.push(prop)
      }
    }
  }
  return output;
}


function convertToGrade(arrayOfTestScores){
  var output = [];
  for (var i = 0; i < arrayOfTestScores.length; i++) {
    var grade = arrayOfTestScores[i];
    if(grade < 60){
      output.push('F');
    } else if (grade >= 60 && grade <= 70){
      output.push('D');
    } else if (grade > 70 && grade <=80){
      output.push('C');
    } else if (grade > 80 && grade <= 90){
      output.push('B');
    } else {
      output.push('A');
    }
  }
  return output;
}
console.log(convertToGrade([ 68, 74, 99, 45, 83, 95 ]));

scoresObject = {
    "A": [100, 90],
    "B": [89, 80],
    "C": [79, 70],
    "D": [69, 60],
    "F": [59, 0]
}

function scoresToGrades(scores) {
    return scores.map(function(elem) {
        for (prop in scoresObject) {
            if (elem <= scoresObject[prop][0] && elem >= scoresObject[prop][1]) {
                return prop;
            }
        }
    })    
}