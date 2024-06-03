export default function makeCountdownArray(inputNumber, string){
    const results = [];
    for (let i = inputNumber; i > 0; i--){
      results.push(i);
    }
    results.push(string);
    return results
  }