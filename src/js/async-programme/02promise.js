/**
 * 异步编程-promise
 * 将回调函数的嵌套，改成链式调用，调用过程清晰，可维护性增强，但代码冗余
 */
const url1 = 'http://localhost:10020/api/seller';
const url2 = 'http://localhost:10020/api/goods';
const url3 = 'http://localhost:10020/api/ratings';

function getData(url) {
	return new Promise((resolve, reject) => {
		// 异步操作
		fetch(url).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				console.error('服务器繁忙，请稍后再试；\r\nCode:' + res.status);
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}
getData(url1).then(data => {
  console.log(data);
  return getData(url2);
}).then(data => {
  console.log(data);
  return getData(url3);
}).then(data => {
  console.log(data);
});
