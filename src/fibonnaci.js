// two conditions of febonaci
// condition: last febo is less than num
function febo(num) {
	var febo = [1, 1];
	var i = 2;
	var sum = febo[i - 2] + febo[i - 1];

	while (sum < num) {
		febo.push(sum);
		i = i + 1;
		sum = febo[i - 2] + febo[i - 1];
	}

	return febo;	
}

// test comment

// condition: sum of odd febo is less than num
function febo1(num) {
	var febo = [1, 1];
	var i = 2;
	var sum = next = febo[0] + febo[1];

	while (next <= num) {
		febo.push(next);
		i = i + 1;
		var next = febo[i - 2] + febo[i -1];

		if ((next % 2) !== 0) {
			sum = sum + next;
		}
	}

	console.log(sum);
	console.log(sum);
}

febo(50);
