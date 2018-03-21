/**
 * 对象的扩展
 * 1、属性和方法的简洁写法
 * 2、属性名表达式 
 * 3、方法的name属性
 * 4、Object.is()，比较两个值是否严格相等，与===基本一致
 * 5、Object.assign()，用于对象的合并
 * 6、属性的遍历
 * 7、__photo__，Object.getPrototypeOf()，Object.setPrototypeOf()
 * 8、super关键字，指向当前对象的原型对象
 * 9、Object.keys()，Object.values()，Object.entries()
 * 10、对象的扩展运算符，ES2018
 */
{
	// 1、属性和方法的简洁写法
	const foo = 'bar';
	const baz = {foo};

	// 等同于
	// const baz = {foo: foo};

	// 方法简写
	const obj = {
		foo: function() {}
	}
	// 等同于
	// const obj = {
	// 	foo() {}
	// }
}
{
	// 2、属性名表达式 
	// ES6允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内
	let propKey = 'foo';

	let obj = {
	  [propKey]: true,
	  ['a' + 'bc']: 123,
	  ['h' + 'ello']() {return 'hi'}
	};
}
{
	// 3、方法的name属性
	// 函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
	const person = {
	  sayName() {
	    console.log('hello!');
	  }
	};

	person.sayName.name   // "sayName"
}
{
	// 4、Object.is()，比较两个值是否严格相等，与===基本一致
	Object.is('foo', 'foo') // true
	Object.is({}, {}) // false
	Object.is(+0, -0) // false
	Object.is(NaN, NaN) // true
}
{
	// 5、Object.assign()，用于对象的合并
	// 将源对象（source）的所有可枚举属性，复制到目标对象（target）
	const target = {a:1};
	const source1 = {b:2};
	const source2 = {c:3};
	Object.assign(target, source1, source2);
	source1.b = 5;
	console.log(target); // {a: 1, b: 2, c: 3}

	// 只有一个参数，会直接返回该参数
	const obj = {a: 1};
	Object.assign(obj) === obj // true

	// 浅拷贝，如果源对象的属性为对象，拷贝得到的是这个属性的引用
	const obj1 = {a: {b: 1}};
	const obj2 = Object.assign({}, obj1); // 把obj1拷贝到obj2

	obj1.a.b = 2;
	console.log(obj2.a.b) // 2
}
{
	// 6、属性的遍历
	// 1、for in
	// 遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

	// 2、Object.keys(obj)
	// 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）

	// 3、Object.getOwnPropertyNames(obj)
	// 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）

	// 4、Object.getOwnPropertySymbols(obj)
	// 返回一个数组，包含对象自身的所有 Symbol 属性

	// 5、Reflect.ownKeys(obj)
	// 返回一个数组，包含对象自身的所有键名
}
{
	// 7、__photo__，Object.getPrototypeOf()，Object.setPrototypeOf()

	// 格式
	// Object.setPrototypeOf(object, prototype)

	// 用法
	const o = Object.setPrototypeOf({}, null);

	// 读取一个对象的原型对象
	// Object.getPrototypeOf(obj);
}
{
	// 8、super关键字，指向当前对象的原型对象
	const proto = {foo: 'hello'};
	const obj = {
		find() { return super.foo }
	};
	// 设置obj对象的原型为proto
	const o = Object.setPrototypeOf(obj, proto);
	console.log( obj.find() ); // hello
	// super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错
	// 目前，只有对象方法的简写法可以让 js 引擎确认，定义的是对象的方法
}
{
	// 9、Object.keys()，Object.values()，Object.entries()
	// 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
	let obj = {name: 'zs', age: 18};
	console.log( Object.keys(obj) ); // ["name", "age"]

	let {keys, values, entries} = Object;
	for (let k of keys(obj)) {
		console.log(k); // name, age
	}
	for (let k of values(obj)) {
		console.log(k); // zs, 18
	}
	for (let [k, v] of entries(obj)) {
		console.log([k, v]); // ["name", "zs"], ["age", 18]
	}

	// Object.entries()将对象转为Map结构
	const map = new Map(Object.entries(obj));
}
{
	// 10、对象的扩展运算符
	let z = {a: 3, b: 4};
	let n = {...z};
	console.log(n); // {a: 3, b: 4}

	var aClone = { ...z };
	// 等同于
	var aClone = Object.assign({}, z);
	// 只是拷贝了对象实例的属性

	// 合并两个对象
	var zn = { ...z, ...n };
	// 等同于
	var zn = Object.assign({}, z, n);
}