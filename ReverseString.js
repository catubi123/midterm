function reverseString(str) {
    // Split the string into an array of characters
    let splitString = str.split("");
    // Reverse the array of characters
    let reverseArray = splitString.reverse();
    // Join the reversed array back into a string
    let joinArray = reverseArray.join("");
    // Return the reversed string
    return joinArray;
  }
  
  // Example usage
  console.log(reverseString("hello")); // Output: "olleh"
  