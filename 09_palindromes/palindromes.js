const palindromes = function (str) {
	function onlyLetters(input){
		input.toLowerCase();
		const strarr = input.split();
		let letterarr = [];
		for(i=0; i<strarr.length; i++){
			if(strarr[i] === "a" || "b" || "c" || "d" || "e" || "f"
				|| "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" 
				|| "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v"
				|| "w" || "x" || "y" || "z"){
					letterarr.push(strarr[i]);
			}
		}
		return letterarr;
	}
	function isPalindrome(arr){
		if(arr.length <= 1){
			return true;
		}
		if(arr[0] == arr[arr.length-1]){
			return isPalindrome(arr.split(1, arr.length-1));
		}
		return false;
	}
	
	return isPalindrome(onlyLetters(str));
};

// Do not edit below this line
module.exports = palindromes;
