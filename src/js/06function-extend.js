/**
 * 函数扩展
 * 1、参数默认值
 * 2、rest 参数
 * 3、严格模式
 * 4、name属性
 * 5、箭头函数
 * 6、双冒号运算符
 */
{
	// 1、参数默认值
	// es5写法
	function log(x, y) {
		// y = y || 'world';
		if (typeof y === 'undefined') {
		  y = 'world';
		}
		console.log(x, y);
	}
	log('hello'); // hello world
	log('hello', 'china'); // hello china
	log('hello', ''); // hello

	// es6写法，直接写在参数定义的后面
	function echo(x, y = 'world') {
		console.log(x, y);
	}
	echo('hello'); // hello world
	echo('hello', 'china'); // hello china
	echo('hello', ''); // hello

	// 惰性求值
	let x = 99;
	function foo(p = x + 1) {
	  console.log(p);
	}

	foo() // 100

	x = 100;
	foo() // 101

	// 默认值与解构赋值结合使用
	// 单独使用解构赋值默认值
	function bond({a, b = 5}) {
		console.log(a, b);
	}
	bond({}); // undefined 5
	bond({a: 1});  // 1 5
	bond({a: 1, b: 2}); // 1 2
	// bond(); // Cannot read property 'a' of undefined

	// 结合使用函数默认值和解构赋值，避免了上面的报错
	function combine({a, b = 5} = {}) {
		console.log(a, b);
	}
	combine(); // undefined 5

	// 函数的 length 属性 
	// (function (a) {}).length // 1
	// (function (a = 5) {}).length // 0
	// (function (a, b, c = 5) {}).length // 2
	// (function(...args) {}).length // 0

	// 作用域
	let d = 1;
	function f1(d, e = d) {
	  console.log(e);
	}
	f1(2) // 2

	let f = 1;
	function f2(g = f) {
	  let f = 2;
	  console.log(g);
	}

	f2() // 1
}

{
	// 2、rest 参数
	// 形式为...变量名，rest 参数搭配的变量是一个数组
	// rest 参数只能是最后一个参数
	function add(...values) {
		let sum = 0;
		for (var val of values) {
			sum += val;
		}
		return sum;
	}
	console.log( add(2, 5, 3) );
}
{
	// 3、严格模式
	// ES5，函数内部可以设定为严格模式
	// ES6，只要函数参数使用了默认值、解构赋值、或者扩展运算符，
	// 那么函数内部就不能显式设定为严格模式，否则会报错
}
{
	// 4、name属性，返回函数的函数名
	function foo() {}
	foo.name // "foo"
	// name属性早就被浏览器广泛支持，但是直到 ES6，才将其写入标准

	// 将一个匿名函数赋值给一个变量，ES5，ES6有所区别
	var f = function () {};

	// ES5
	// f.name // ""

	// ES6
	// f.name // "f"

	// Function构造函数返回的函数实例，name属性的值为anonymous
	(new Function).name // "anonymous"

	// bind返回的函数，name属性值会加上bound前缀
	function bar() {};
	bar.bind({}).name // "bound bar"
}
{
	// 5、箭头函数
	let f = v => v;
	// let f = function(v) { return v; };

	// 与变量解构结合使用
	const full = ({ first, last }) => first + ' ' + last;

	// 与rest参数结合使用
	const numbers = (...nums) => nums;

	numbers(1, 2, 3, 4, 5); // [1,2,3,4,5]
	
	/**
	 * 注意点：
	 * 1、函数体内的this对象，是定义时所在的对象，而不是调用时所在的对象
	 * 2、不可以当作构造函数，即不可以使用new命令，否则会抛出一个错误
	 * 3、不可以使用arguments对象，该对象在函数体内不存在。可以用 rest 参数代替
	 * 4、不可以使用yield命令，因此箭头函数不能用作 Generator 函数
	 */
	var id = 10;
	function foo() {
		setTimeout(() => {
			console.log(this.id);
		},100);
	}
	foo.call({id: 20}); // 20
	// 箭头函数导致this总是指向函数定义生效时所在的对象
}
{
	// 6、双冒号运算符，es7提案
	// 函数绑定运算符，用来取代call、apply、bind调用
	/**
	 * 双冒号左边是一个对象，右边是一个函数。
	 * 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
	 */
	// let foo = {};
	// function bar() {}
	// foo::bar;
	// 等同于
	// bar.bind(foo);

	// foo::bar(...arguments);
	// // 等同于
	// bar.apply(foo, arguments);
}