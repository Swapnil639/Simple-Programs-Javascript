function arePalindromes(num1, num2) {
    // Convert both numbers to strings
    let str1 = num1.toString();
    let str2 = num2.toString();
  
    // Reverse the second string
    let reversedStr2 = str2.split('').reverse().join('');
  
    // Compare the two strings
    if (str1 === reversedStr2) {
      return true;
    } else {
      return false;
    }
  }
  console.log(arePalindromes(121,121));