/**
 * 异步编程-generator
 * 对协程的实现，使用同步的思维来写异步
 */
const url1 = 'http://localhost:10020/api/seller';
const url2 = 'http://localhost:10020/api/goods';
const url3 = 'http://localhost:10020/api/ratings';

function getData(url) {
  return new Promise((resolve, reject) => {
	// 异步操作
	fetch(url)
		.then(res => {
			return res;
		})
		.then(data => {
			resolve(data);
		})
		.catch(err => {
			reject(err);
		});
  	});
}

function* gen() {
  const a = yield 1;
  const b = yield 2 + a;
  yield 3 + b;
  return 'end';
}
const foo = gen();
console.log( foo.next() ); // {value: 1, done: false}
console.log( foo.next(1) ); // {value: 3, done: false}
console.log( foo.next(5) ); // {value: 8, done: false}
console.log( foo.next() ); // {value: "end", done: true}


// function *gen() {
// 	yield getData(url1).then(data => data);
// 	yield getData(url2).then(data => data);
// 	yield getData(url3).then(data => data);
// }
// const foo = gen();
// console.log( foo.next() );
// console.log( foo.next() );
// console.log( foo.next() );