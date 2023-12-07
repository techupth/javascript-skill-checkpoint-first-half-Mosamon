// Question #7 (Optional)
const students = [
    { name: 'Alice', score: 88 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 48 },
    { name: 'Eve', score: 65 },
  ];

  function calculateAverageScore(students){
    let AverageScore = 0;
    for(let i=0;i<students.length;i++){
        AverageScore = (AverageScore+students[i].score)   
    }
    AverageScore = AverageScore/students.length
    return AverageScore
  }


  function findHighestScorers(students){
    let maxValue = 0;
    for(let i=0;i<students.length;i++){
   
  } console.log(Math.max(students[i].score))
}
 
