/**
 * 数组扩展
 * 1、扩展运算符
 * 2、Array.from()
 * 3、Array.of()，将一组值转换为数组
 * 4、数组实例的 copyWithin()
 * 5、数组实例的 find() 和 findIndex()
 * 6、数组实例的fill()，使用给定值，填充一个数组
 * 7、数组实例的 entries()，keys() 和 values()，用于遍历数组
 * 8、数组实例的 includes()，返回一个布尔值，表示某个数组是否包含给定的值
 * 9、数组空位，ES6 明确将空位转为undefined
 */
{
	// 1、扩展运算符，将一个数组转为用逗号分隔的参数序列
	console.log(...[1, 2, 3]);

	// 由于扩展运算符可以展开数组，可以替代apply
	Math.max.apply(null, [3, 8, 5]);
	Math.max(...[3, 8, 5]);

	/**
	 *  应用：
	 *  1、复制（克隆）数组
	 *  2、合并数组
	 *  3、与解构赋值结合，来生成数组
	 *  4、将字符串转为数组 [...'hello']
	 *  5、将Iterator 接口的对象转为数组
	 */
	// let a1 = [], a2 = [];
	// （1）复制（克隆）数组
	const a1 = [1, 2];
	// 写法一
	const a2 = [...a1];
	// 写法二
	// const [...a2] = a1;

	// （2）合并数组
	// [...arr1, ...arr2, ...arr3];

	// （3）与解构赋值结合，来生成数组
	const [first, ...rest] = [1, 2, 3, 4, 5];
	console.log(first);
	console.log(rest);
}
{
	// 2、Array.from()
	// 将伪数组和可遍历(iterable)对象转为真正的数组
	// 常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象
	let arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

	// ES6的写法
	let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

	// 任何有length属性的对象，都可以通过Array.from方法转为数组
	Array.from({ length: 3 });// [ undefined, undefined, undefined ]

	// 第二个参数，类似数组的map方法，对每个元素进行处理，处理后的值放入返回的数组
	Array.from([1, , 2, , 3], (n) => n || 0)// [1, 0, 2, 0, 3]

}
{
	// 3、Array.of()，将一组值转换为数组
	Array.of(3, 11, 8) // [3,11,8]
	// 弥补数组构造函数Array()的不足，替代Array()或new Array()
}
{
	// 4、数组实例的 copyWithin()
	// 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
	// 会修改当前数组
	// Array.prototype.copyWithin(target, start = 0, end = this.length)
	/**
	 * target（必需）：从该位置开始替换数据。如果为负值，表示倒数
	 * start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数
	 * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
	 */

	[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]

}
{
	// 5、数组实例的 find() 和 findIndex()
	// 找出第一个符合条件的数组成员，找不到返回undefined
	let arr = [1, 5, 10, 15];
	arr.find(function(value, index, arr) {
	  return value > 9;
	}) // 10

	// 找出第一个符合条件的数组成员的索引，找不到返回-1
	arr.findIndex(function(value, index, arr) {
	  return value > 9;
	}) // 2

	// 接受第二个参数，用来绑定回调函数的this对象
	function f(v){
	  return v > this.age;
	}
	let person = {name: 'John', age: 20};
	[10, 12, 26, 15].find(f, person);
	// find函数接收了第二个参数person对象，回调函数中的this对象指向person对象
}
{
	// 6、数组实例的fill()，使用给定值，填充一个数组
	let arr = ['a', 'b', 'c'];
	arr.fill(7)  // [7, 7, 7]
	new Array(3).fill(7) // [7, 7, 7]

	// 接受第二个和第三个参数，用于指定填充的起始位置和结束位置
	arr.fill(7, 1, 2) // ['a', 7, 'c']
}
{
	// 7、数组实例的 entries()，keys() 和 values()，用于遍历数组
	/**
	 * 用for...of循环进行遍历
	 * keys()是对键名的遍历
	 * values()是对键值的遍历
	 * entries()是对键值对的遍历
	 */
	for (let index of ['a', 'b'].keys()) {
		console.log('keys', index);
	}
	for (let item of ['a', 'b'].values()) {
		console.log('values', item);
	}
	for (let [index, item] of ['a', 'b'].entries()) {
		console.log('entries', index, item);
	}
}
{
	// 8、数组实例的 includes()，返回一个布尔值，表示某个数组是否包含给定的值
	console.log( [1, 2, 3].includes(2) ); // true

	// 第二个参数表示搜索的起始位置，默认为0，若为负数，则表示倒数的位置
	console.log( [1, 2, 3].includes(3, 3) );  // false
}
{
	// 9、数组空位
	Array(3) // [, , ,]
	// ES6 明确将空位转为undefined
}