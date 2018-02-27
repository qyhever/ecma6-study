/**
 * 变量的解构赋值
 */

/**
 * 1、数组解构
 */
{
	let [a, b, c] = [1, 2, 3];
	console.log(a, b, c);

	let [foo, [[bar], baz]] = [1, [[2], 3]];
	console.log(foo, bar, baz);

	let [head, ...tail] = [1, 2, 3, 4];
	console.log(head, tail); // 1, [2, 3, 4]

	let [x, y, z] = new Set(['a', 'b', 'c']);
	console.log(x, y, z);
}

{
	// 解构不成功，变量值为undefined
	let [foo] = [];
	console.log(foo);

	// 不完全解构
	let [x, y] = [1, 2, 3];
	console.log(x, y);
}

{
	// 报错
	// let [foo] = 1;
	// let [foo] = false;
	// let [foo] = NaN;
	// let [foo] = undefined;
	// let [foo] = null;
	// let [foo] = {};
}

{
	// 默认值
	let [foo = true] = [];
	console.log(foo);

	// 注意
	let [x = 1] = [null];
	console.log(x);
}


/**
 * 2、对象解构
 */
{
	let { foo, bar } = { foo: "aaa", bar: "bbb" };
	console.log(foo, bar);
}
{
	// 变量名与属性名不一致
	let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
	console.log(baz);
}
{
	// 嵌套解构
	let obj = {
	  p: [ 'Hello', { y: 'World' } ]
	};

	let { p: [x, { y }] } = obj;
	console.log(x, y);
}
{
	// 默认值
	var {a = 3} = {};
	console.log(a);

	var {x, y = 5} = {x: 1};
	console.log(x, y);
}
{
	// 将声明的变量用于解构赋值
	// 错误的写法，js 引擎会将{x}解析成一个代码块，从而发生语法错误
	// let x;
	// {x} = {x: 1};// SyntaxError: syntax error

	// 正确的写法
	let x;
	({x} = {x: 1});
}


/**
 * 3、字符串解构
 */
{
	const [a, b, c, d, e] = 'hello';
	console.log(a, b, c, d, e);

	//  对length进行解构赋值
	let {length : len} = 'hello';
	console.log(len);
}

/**
 * 4、数值和布尔值的解构
 */
{
	let {toString: s} = 123;
	console.log(s === Number.prototype.toString); // true

	let {toString: t} = true;
	console.log(t === Boolean.prototype.toString); // true
}

/**
 * 5、函数参数解构
 */
{
	function add([x, y]){
	  return x + y;
	}
	console.log( add([10, 20]) );

	let arr = [[1, 2], [3, 4]];
	var result = arr.map(([a, b]) => a + b);
	console.log(result); // [3, 7]
}
{
	// 参数默认值
	function move({x = 0, y = 0} = {}) {
		return [x, y];
	}
	// 函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。
	// 如果解构失败，x和y等于默认值
	console.log( move({x: 3, y: 8}) ); // [3, 8]
	console.log( move({x: 3}) ); // [3, 0]
	console.log( move({}) ); // [0, 0]
	console.log( move() ); // [0, 0]
}
{
	// 参数默认值
	function move({x, y} = { x: 0, y: 0 }) {
		return [x, y];
	}
	// 为函数move的参数指定默认值，而不是为变量x和y指定默认值
	console.log( move({x: 3, y: 8}) ); // [3, 8]
	console.log( move({x: 3}) ); // [3, undefined]
	console.log( move({}) ); // [undefined, undefined]
	console.log( move() ); // [0, 0]
}

/**
 * 6、应用
 */
{
	// 1、交换变量的值
	let x = 1;
	let y = 2;
	[x, y] = [y, x];

	// 2、从函数返回多个值
	// es5中，函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
	// 使用es6的解构赋值，取出这些值就非常方便
	function example1() {
	  return [1, 2, 3];
	}
	let [a, b, c] = example1();

	function example2() {
	  return { foo: 1, bar: 2 };
	}
	let { foo, bar } = example2();
}