/**
 * 
 */
// function* gen() {
//   const a = yield 1;
//   const b = yield 2 + a;
//   yield 3 + b;
//   return 'end';
// }
async function gen() {
  const a = await 1;
  const b = await 2 + a;
  const c = await 3 + b;
  return c;
}
console.log(gen());