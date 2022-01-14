	module.exports = toReadable;
	
	function toReadable (number) {
	let unit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let stringNumber = '' + number;
	let firstDigit = +(stringNumber[0]);
	let secondDigit = +(stringNumber[1]);
	let thirdDigit = +(stringNumber[2]);


	if (number === 0) {
		return "zero";
	} 
	else if (number < 10) {
		return unit[number-1];
	} 

	else if (number < 100 && number % 10 == 0) {
		return dozens[firstDigit-1];
	}

	else if (number > 10 && number < 20) {
		return teen[secondDigit-1];
	}
	else if (number % 10 !== 0 && number > 20 && number < 100) {
		return dozens[firstDigit-1] + " " + unit[secondDigit-1];
	}

	else if (number % 100 == 0) {
		return unit[firstDigit-1] + ' hundred';
	}

	// 410
	else if (number % 100 !== 0 && number > 100 && secondDigit == 1 && thirdDigit == 0) {
		return unit[firstDigit-1] + ' hundred ' + dozens[0];
	}
	else if (number % 100 !== 0 && number > 100 && secondDigit == 1) {
		return unit[firstDigit-1] + ' hundred ' + teen[thirdDigit-1];
	}
	else if (number % 100 !== 0 && number > 100 && thirdDigit == 0) {
		return unit[firstDigit-1] + ' hundred ' + dozens[secondDigit-1];
	}

	else if (number % 100 !== 0 && number > 100 && secondDigit) {
		return unit[firstDigit-1] + ' hundred ' + dozens[secondDigit-1] + " " + unit[thirdDigit-1];
	}

	else if (number % 100 !== 0 && number > 100) {
		return unit[firstDigit-1] + ' hundred ' + unit[thirdDigit-1];
	}
}

// console.log(toReadable(1));
// console.log(toReadable(11));
// console.log(toReadable(10));
// console.log(toReadable(55));
// console.log(toReadable(100));
// console.log(toReadable(149));
// console.log(toReadable(509));
// console.log(toReadable(500));
// console.log(toReadable(942));
// console.log(toReadable(962));
// console.log(toReadable(992));
// console.log(toReadable(999));