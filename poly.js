function polyndrom(str) {
	for(let i = 0; i < Math.floor(str.length / 2) - 1; i++) {
		if(str[i] === str[str.length - i - 1) {
		}
		else {
			return false;
		}
	}
	return true;
}