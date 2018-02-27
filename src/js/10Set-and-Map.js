/**
 * Set和Map数据结构
 */
{
	// 1、Set，类似于数组
	// 接受数组(或具有 iterable 接口的其他数据结构)作为参数，用来初始化
	const set = new Set([1, 2, 3, 4, 4]);
	console.log(set); // Set(4) {1, 2, 3, 4}

	// Set 实例的属性和方法
	/**
	 * 属性：
	 * Set.prototype.constructor：构造函数，默认就是Set函数
	 * Set.prototype.size：返回Set实例的成员总数
	 *
	 * 方法：
	 * 操作方法：
	 * add(value)：添加某个值，返回 Set 结构本身
	 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
	 * has(value)：返回一个布尔值，表示该值是否为Set的成员
	 * clear()：清除所有成员，没有返回值
	 * 遍历方法：
	 * keys()：返回键名的遍历器
	 * values()：返回键值的遍历器
	 * entries()：返回键值对的遍历器
	 * forEach()：使用回调函数遍历每个成员
	 */
	// 操作方法：
	let s = new Set();
	s.add(1).add(2).add(2);

	console.log( s.size ); // 2
	console.log( s.has(1), s.has(2), s.has(3) ); // true true false

	s.delete(2);
	console.log( s.has(2) ); // false

	// 判断是否包括一个键上面，Object结构和Set结构的写法
	const properties1 = {'width': 1, 'height': 1};
	if (properties1['width']) {
		// do...
	}
	const properties2 = new Set();
	properties2.add('width');
	properties2.add('height');
	if (properties2.has('width')) {
		// do...
	}

	// Array.from方法可以将 Set 结构转为数组
	const items = new Set([1, 2, 3, 4, 5]);
	const array = Array.from(items);

	// 遍历方法：
	let colors = new Set(['red', 'green', 'blue']);
	for (let item of colors.keys()) {
		console.log(item); // red green blue
	}
	for (let item of colors.values()) {
		console.log(item); // red green blue
	}
	for (let item of colors.entries()) {
		console.log(item); // ["red", "red"] ["green", "green"] ["blue", "blue"]
	}

	// 简洁写法
	for ( let item of colors) {
		console.log(item); // red green blue
	}
	colors.forEach((value, key) => console.log(key + ':' + value));
	// red:red green:green blue:blue

	// 实现并集（Union）、交集（Intersect）和差集（Difference）
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);

	// 并集
	let union = new Set([...a, ...b]);
	// Set {1, 2, 3, 4}

	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	// set {2, 3}

	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	// Set {1}
}
{
	// 2、WeakSet
	// WeakSet 只能放置对象
	// WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
	// WeakSet 不可遍历
	const ws = new WeakSet([ [1, 2], [3, 4] ]);
	console.log(ws); // WeakSet {[1, 2], [3, 4]}

	/**
	 * WeakSet的方法：
	 * WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员
	 * WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员
	 * WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中
	 */
	const weakset = new WeakSet();
	const obj = {};
	const foo = {};

	weakset.add(window);
	weakset.add(obj);

	console.log( weakset.has(window) ); // true
	console.log( weakset.has(foo) ); // false

	weakset.delete(window);
	console.log( weakset.has(window) ); // false
}
{
	// 3、Map，类似于对象
	const m = new Map();
	const o = {name: 'zs'};

	m.set(o, 'content'); // Map(1) {Object => "content"}
	console.log( m.get(o) ); // content

	console.log( m.has(o) ); // true
	m.delete(o);
	console.log( m.has(o) ); // false


	// 接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
	const map = new Map([
	   ['name', '张三'],
	   ['title', 'Author']
	]);
	console.log(map); // Map(2) {"name" => "张三", "title" => "Author"}

	console.log( map.size ); // 2

	console.log( map.has('name')); // true

	console.log( map.get('name') ); // 张三

	console.log( map.has('title')); // true

	console.log( map.get('title') ); // Author

	// Map内部解析数组参数算法
	const items = [
		['name', 'zs'],
		['title', 'Author']
	];
	const mp = new Map();
	items.forEach( ([key, value]) => mp.set(key, value) );

	{
		// 实例的属性和操作方法
		const map = new Map();
		// size属性
		map.set('foo', true).set('bar', false);
		console.log( map.size ); // 2

		// set(key, value)，返回当前 Map 结构
		map.set('edition', 6)        // 键是字符串
		.set(262, 'standard')     // 键是数值
		.set(undefined, 'nah')    // 键是 undefined

		// get(key)
		const hello = () => 'hello';
		map.set(hello, 'Hello ES6!') // 键是函数
		console.log( map.get(hello) ); // Hello ES6!

		// has(key)
		console.log( map.has('foo') ); // true
		console.log( map.has(hello) ); // true
		console.log( map.has(undefined) ); // true

		// delete(key)，删除某个键，返回true。如果删除失败，返回false

		// clear()，清除所有成员，没有返回值
	}
	{
		/**
		 * 遍历方法：
		 * keys()：返回键名的遍历器
		 * values()：返回键值的遍历器
		 * entries()：返回所有成员的遍历器
		 * forEach()：遍历 Map 的所有成员
		 */
		const map = new Map([
		  ['F', 'no'],
		  ['T',  'yes'],
		]);

		for (let key of map.keys()) {
		  console.log(key);
		}
		// "F"
		// "T"

		for (let value of map.values()) {
		  console.log(value);
		}
		// "no"
		// "yes"

		for (let item of map.entries()) {
		  console.log(item[0], item[1]);
		}
		// "F" "no"
		// "T" "yes"

		// 或者
		for (let [key, value] of map.entries()) {
		  console.log(key, value);
		}
		// "F" "no"
		// "T" "yes"

		// 等同于使用map.entries()
		for (let [key, value] of map) {
		  console.log(key, value);
		}
		// "F" "no"
		// "T" "yes"
	}
}