function checkAnagram(str1, str2) {
    let lowStr1 = str1.toLowerCase(); // Converting string 1 to lowercase
    let lowStr2 = str2.toLowerCase(); // Converting string 2 to lowercase
    let sortedStr1 = lowStr1.split('').sort().join(''); // Converting the string 1 into characters and sort them
    let sortedStr2 = lowStr2.split('').sort().join(''); // Converting the string 2 into characters and sort them

    if (sortedStr1 == sortedStr2) {
      console.log("The strings are anagrams.");
      return true
    } else {
      console.log("The strings are not anagrams.");
      return false
    }
    return num;
}

checkAnagram('silent', 'listen')
