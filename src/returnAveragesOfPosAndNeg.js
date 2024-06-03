export default function avgNegativeAndPositive(inputArrayOfNumber){
    return [avgOfNegatives(inputArrayOfNumber), avgOfPositives(inputArrayOfNumber)];
  }
  
  function avgOfPositives(inputArrayOfNumbers) {
    let positiveCount = 0;
    let positiveTotal = 0;
    for (let i of inputArrayOfNumbers) {
      if(i > 0) {
        positiveCount++;
        positiveTotal += i;
      }
    }
    if (positiveCount === 0) {
      return null;
    } else {
      return positiveTotal/positiveCount; 
    }
  }
  
  function avgOfNegatives(inputArrayOfNumbers) {
    let negativeCount = 0;
    let negativeTotal = 0;
    for (let i of inputArrayOfNumbers) {
      if(i < 0) {
        negativeCount++;
        negativeTotal += i;
      }
    }
    if (negativeCount === 0) {
      return null;
    } else {
      return negativeTotal/negativeCount; 
    }
  }
  //Test cases
//   console.log(avgNegativeAndPositive([]), "Expected: [null, null]");
//   console.log(avgNegativeAndPositive([6, 0, 12, -2, 4, -2, 0, 10]), "Expected: [-2, 8]");
//   console.log(avgNegativeAndPositive([-2.5, 5.5]), "Expected: [-2.5, 5.5]");
//   console.log(avgNegativeAndPositive([-2, -8]), "Expected: [-5, null]");
//   console.log(avgNegativeAndPositive([10, 2]), "Expected: [null, 6]");