// 1.变量提升
/*var num = 123;
function f1() {
  console.log(num); // 123
}
function f2() {
  var num = 456;
  f1();
}
f2();

var num
function f1() {
  console.log(num); // 123
}
function f2() {
  var num
  num = 456
  f1()
}
num = 123
f2()*/

// 2.函数声明和函数表达式
// 函数声明
function foo () {}
// 函数表达式
var bar = function () {}
// 同名函数，后面的函数会覆盖前面的函数
// 函数提升是函数名的提升
// 函数声明创建的函数提升是整个函数的提升

function t (age) {
  var g
  function g () {}
  alert(g)// function g () {}
  g = 'hello'
  alert(g)
}
t()