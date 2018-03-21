/**
 * 异步编程-回调函数
 */

const url1 = 'http://localhost:10020/api/seller';
const url2 = 'http://localhost:10020/api/goods';
const url3 = 'http://localhost:10020/api/ratings';

function request(url, callback) {
	fetch(url).then((res) => {
	  if (res.ok) {
	    return res.json();
	  } else {
	    console.error('服务器繁忙，请稍后再试；\r\nCode:' + res.status);
	  }
	}).then((data) => {
	  callback(data);
	}).catch((err) => {
	  console.error(err);
	});
}

request(url1, function(data) {
	console.log(data);
	request(url2, function(data) {
		console.log(data);
		request(url3, function(data) {
			console.log(data);
		});
	});
});
