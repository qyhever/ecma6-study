/**
 * Symbol
 * 1、概述
 * 2、作为属性名的 Symbol
 * 3、属性名的遍历
 * 4、Symbol.for()，Symbol.keyFor()
 */
{
	// 1、概述
	// ES5中对象属性名都是字符串，容易冲突，ES6引入Symbol数据类型
	// 表示独一无二的值，Symbol值通过Symbol函数生成
	let s = Symbol();
	console.log(typeof s); // symbol

	// 可以接受一个字符串作为参数，用于区分
	let s1 = Symbol('foo');
	let s2 = Symbol('bar');

	console.log(s1, s2); // Symbol(foo) Symbol(bar)

	// 相同参数的Symbol函数的返回值不相等
	console.log( Symbol('foo') === Symbol('foo') ); // false

	// 不能与其他类型的值进行运算，会报错

	// 可以显式转为字符串

	// 可以转为布尔值，但是不能转为数值

}
{
	// 2、作为属性名的 Symbol
	let mySymbol = Symbol();

	let a = {
		[mySymbol]: 'hello'
	};
	Object.defineProperty(a, Symbol(), { value: 'Hello!' });
	console.log(a); // {Symbol(): "hello", Symbol(): "Hello!"}
	console.log(a[mySymbol]); // hello
	
}

{
	// 3、属性名的遍历
	const obj = {
		[Symbol('a')]: 'hello',
		[Symbol('b')]: 'world'
	};
	// 得到当前对象的所有用作属性名的 Symbol 值
	const objSymbols = Object.getOwnPropertySymbols(obj);
	console.log(objSymbols);

	// Reflect.ownKeys方法可以返回所有类型的键名
	console.log( Reflect.ownKeys(obj) );
}
{
	// 4、Symbol.for()，Symbol.keyFor()
	// 同样参数的Symbol.for方法生成的是同一个值
	let s1 = Symbol.for('foo');
	let s2 = Symbol.for('foo');
	console.log(s1 === s2); // true
	console.log( Symbol.keyFor(s1) ); // foo

	let s3 = Symbol('foo');
	console.log( Symbol.keyFor(s3) ); // undefined
}