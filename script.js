
	function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase to ensure case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Use indexOf to find the first occurrence of the lowercase subStr in the lowercase str
    return lowerStr.indexOf(lowerSubStr);
}

// Test examples
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1

  // write your code here
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
