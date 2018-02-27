/**
 * 入口文件
 */
import 'babel-polyfill'; // 垫片


// import '@/js/01variable-statement';
// import '@/js/02variable-deconstruction';
// import '@/js/03string-extend';

// import '@/js/05number-extend';
// import '@/js/06function-extend';
// import '@/js/07array-extend';
// import '@/js/08object-extend';
// import '@/js/09symbol';
// import '@/js/10Set-and-Map';

// import '@/js/15Generator';

// import '@/js/async-programme/01callback'
// import '@/js/async-programme/02promise'
// import '@/js/async-programme/03generator'
// import '@/js/async-programme/04async'

// import '@/js/module/m2.js';

Number.prototype.add = function(x) {
    return this + x;
};
// 数值后面的点，会被解释为小数点，而不是点运算符
// var num = 8['add'](2);
var num = (8).add(2);
console.log(num);