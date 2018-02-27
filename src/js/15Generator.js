/**
 * Generator函数的语法
 */
{
	// 1、基本操作
	function *helloWorld() {
		yield 'hello';
		yield 'world';
		return 'end';
	}
	let hw = helloWorld();

	console.log( hw.next() ); // {value: "hello", done: false}

	console.log( hw.next() ); // {value: "world", done: false}

	console.log( hw.next() ); // {value: "end", done: true}

	console.log( hw.next() ); // {value: undefined, done: true}
}