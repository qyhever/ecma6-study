/**
 * let和const声明
 */
{
	for (var i = 0; i < 3; i++) {
		console.log(i); // 0, 1, 2
	}
	console.log(i); // 3
	for (let j = 0; j < 3; j++) {
		console.log(j); // 0, 1, 2
	}
	// console.log(j); // j is not defined
}

{
	const a = 1;
	// a = 2; // "a" is read-only
	const obj = {};
	obj.name = 'zs';
}