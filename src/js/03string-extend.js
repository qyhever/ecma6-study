/**
 * 字符串扩展
 * 1、字符串的遍历器接口
 * 2、at()
 * 3、includes(), startsWith(), endsWith()
 * 4、repeat()
 * 5、padStart()，padEnd()
 * 6、模板字符串
 */

{
	// 1、字符串的遍历器接口
	for (let item of 'abc') {
	  console.info(item);
	}
}
{
	// 2、at()
	console.info( 'abc'.charAt(0) );
	console.info( '𠮷'.charAt(0) ); // 无法显示

	console.info( 'abc'.at(0) );
	console.info( '𠮷'.at(0) ); // "𠮷"
}
{
	// 3、includes(), startsWith(), endsWith()
	let s = 'Hello world!';
	console.info( s.startsWith('Hello') ); // true
	console.info( s.endsWith('!') ); // true
	console.info( s.includes('o') ); // true

	// 都支持第二个参数，表示开始搜索的位置
	console.info( s.startsWith('world', 6) ); // true
	console.info( s.endsWith('Hello', 5) ); // true
	console.info( s.includes('Hello', 6)  ); // false
	// endsWith的行为与其他两个方法有所不同。它针对前n个字符
	// 其他两个方法针对从第n个位置直到字符串结束
}
{
	// 4、repeat()
	console.info( 'hello'.repeat(2) );

	// 小数将会被取整
	console.info( 'na'.repeat(2.9) ); // "nana"

	// 参数是负数或者Infinity，会报错
	// console.info( 'na'.repeat(Infinity) );
	// console.info( 'na'.repeat(-1) );
}
{
	// 5、padStart()，padEnd()
	// 参数1：指定字符串的最小长度
	// 参数2：用来补全的字符

	// padStart()用于头部补全
	console.log( 'x'.padStart(5, 'ab') );

	// padEnd()用于尾部补全
	console.log( 'x'.padEnd(5, 'ab') );

	// 超过了指定的最小长度，则会截去超出位数的补全字符串
	// 省略第二个参数，默认使用空格补全长度

	// 应用
	// 补0操作
	console.log( '1'.padStart(2, '0') );
	// 提示字符串格式
	console.log( '09-12'.padStart(10, 'YYYY-MM-DD') );
}
{
	///6、模板字符串
	let [name, age] = ['张三', 18];
	console.log( `${name}今年${age}岁` );

	// 在模板字符串中调用函数
	let fn = () => 'hello';
	console.log(`${fn()}你好！`);

}