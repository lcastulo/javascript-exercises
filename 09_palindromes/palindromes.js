const palindromes = function (str) {
	var strarr = str.split("");
	function onlyLetters(strarr){
		let letterarr = []
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
		let firstElement = arr[0];
		let lastElement = arr[arr.length-1];
		let newarr = [];
		if(firstElement != lastElement)
			return false;
		if(arr.length === 0 || arr.length ===1)
			return true;
		if (firstElement === lastElement){
			newarr = arr.slice(1, arr.length-1);
			return isPalindrome(newarr);
		}
		
	}
	
	onlyLetters(str);
	return isPalindrome(str);
};

// Do not edit below this line
module.exports = palindromes;
