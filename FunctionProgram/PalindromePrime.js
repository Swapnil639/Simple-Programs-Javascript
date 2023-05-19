function isPrime(num) {
    if (num < 2) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    return true;
  }
  
  function getPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return parseInt(reversedStr);
  }
  
  let num = 191;
  
  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
    let palindrome = getPalindrome(num);
  
   
    if (isPrime(palindrome)) {
      console.log(`The palindrome of ${num} is ${palindrome}, which is also a prime number.`);
    } else {
      console.log(`The palindrome of ${num} is ${palindrome}, which is not a prime number.`);
    }
  } else {
    console.log(`${num} is not a prime number.`);
  }