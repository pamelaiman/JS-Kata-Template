export default function countOccurences(inputString) {
    if (Number.isInteger(inputString)) {
      return "this is not a string"
    }
    
    const occurence = {} 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    
    const newString = inputString.toLowerCase()
    const characters = newString.split("")
  
    if (characters.length === 0) {
      return "string is empty"
    }
  
    for (let character of characters) {
      if (alphabet.includes(character)) {
        if (character in occurence) {
          occurence[character] += 1
        } else {
          occurence[character] = 1
        }
      }
    }
    return occurence
  }