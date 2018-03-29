/**
 * 异步终极解决方案
 */
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://localhost:3000';
// function* gen() {
//   const a = yield 1;
//   const b = yield 2 + a;
//   yield 3 + b;
//   return 'end';
// }

// async function gen() {
//   const a = await 1;
//   const b = await 2 + a;
//   const c = await 3 + b;
//   return c;
// }
// console.log(gen());

async function gen() {
  const a = await axios.get('/get?ID=12345');
  console.log(a.data);

  const b = await axios.get('/get?username=zs');
  console.log(b.data);

  let params = { id: 10001, type: 'delete' };
  const c = await axios.post('/post', qs.stringify(params));
  console.log(c.data);
}
gen();