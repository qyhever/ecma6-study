/**
 * 数值扩展
 * 1、Number.isFinite(), Number.isNaN()
 * 2、Number.parseInt(), Number.parseFloat()
 * 3、Number.isInteger()
 * 4、Math.trunc()，取整
 * 5、Math.sign()，判断数值正负
 * 6、**，指数运算符
 */
{
	// 1、Number.isFinite(), Number.isNaN()

	// Number.isFinite()用来检查一个数值是否为有限的(finite)，即不是Infinity
	Number.isFinite(15); // true
	// Number.isNaN()用来检查一个值是否为NaN
	Number.isNaN(NaN) // true
}
{
	// 2、Number.parseInt(), Number.parseFloat()
	// es5写法
	parseInt('12.34'); // 12
	parseFloat('123.45#'); // 123.45

	// ES6的写法
	Number.parseInt('12.34') // 12
	Number.parseFloat('123.45#') // 123.45

	// 目的，是逐步减少全局性方法，使得语言逐步模块化
	Number.parseInt === parseInt // true
	Number.parseFloat === parseFloat // true
}
{
	// 3、Number.isInteger()，判断一个数值是否为整数
	console.log( Number.isInteger(25) ); //true
	console.log( Number.isInteger(25.0) ); // true
	console.log( Number.isInteger(25.1) ); // false
}
{
	// 4、Math.trunc()，去除一个数的小数部分，返回整数部分
	console.log( Math.trunc(4.1) );
	console.log( Math.trunc(-4.1) ); // -4
}
{
	// 5、Math.sign()，判断一个数到底是正数、负数、还是零
	/**
	 *  参数为正数，返回+1；
	 *	参数为负数，返回-1；
	 *	参数为 0，返回0；
	 *	参数为-0，返回-0;
	 *	其他值，返回NaN
	 */
	Math.sign(-5) // -1
	Math.sign(5) // +1
	console.log( Math.sign(0) ) // 0
	Math.sign(-0) // -0
	Math.sign(NaN) // NaN
}
{
	///6、**，指数运算符
	2 ** 2 // 4
	2 ** 3 // 8

	// 与等号结合
	let a = 1.5;
	a **= 2;
	// 等同于 a = a * a;

	let b = 4;
	b **= 3;
	// 等同于 b = b * b * b;
}