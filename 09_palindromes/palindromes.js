const palindromes = function (str) {
	function onlyLetters(input){
		let regExp = /[^a-z]/g;
    let ans = input.toLowerCase().replace(regExp, '');
    return ans;
	}
	function isPalindrome(arr){
		if(arr.length <= 1) return true;
		if(arr[0] == arr[arr.length-1])
      return isPalindrome(arr.split(1, arr.length-1));
		return false;
	}
	
	return isPalindrome(onlyLetters(str));
};

// Do not edit below this line
module.exports = palindromes;
