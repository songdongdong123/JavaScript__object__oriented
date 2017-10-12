// 1.使用 typeof bar === "object" 判断 bar 是不是一个对象有神马潜在的弊端？如何避免这种弊端？
// 使用 typeof 的弊端是显而易见的(这种弊端同使用 instanceof)：

// let obj = {a:123}
// let arr = []
/*
console.log(typeof obj === 'object') // true
console.log(typeof arr === 'object') // true
console.log(typeof null === 'object') // true
*/
/*判断数据类型比较准确的方式*/
/*
console.log(Object.prototype.toString.call(obj))  // [objact Object]
console.log(Object.prototype.toString.call(arr))  // [objact Array]
console.log(Object.prototype.toString.call(null)) // [objact Null]
console.log(Object.prototype.toString.call('abc'))// [objact String]
console.log(Object.prototype.toString.call(123))  // [objact Number]
console.log(Object.prototype.toString.call(true)) // [objact Boolean]
console.log(Object.prototype.toString.call('1.3'))// [objact String]
*/

// 2.[] === false => false
// console.log(Boolean([])) // true

// 3.下面的代码会在 console 输出神马？为什么？
/*(function(){
  var a = b = 3
})()*/
// 上面的函数等价于
/*(function () {
  b = 3
  var a = b
})()*/
//所以b变成了全局变量
/*
console.log("a defined? " + (typeof a !== 'undefined')) 
console.log("b defined? " + (typeof b !== 'undefined'))*/

// 3、下面的代码会在 console 输出神马？为什么？
// var self
// var myObject = {
//     foo: "bar",
//     func: function() {
//         self = this
//         console.log("outer func:  this.foo = " + this.foo)// bar
//         console.log("outer func:  self.foo = " + self.foo) // bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo) // undefined
//             console.log("inner func:  self.foo = " + self.foo) // bar
//         }())
//     }
// }
// myObject.func()

// 4.将 JavaScript 代码包含在一个函数块中有神马意思呢？为什么要这么做？
// 一是类似于在循环中定时输出数据项，
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  },100)
}

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 100)
  })(i)
}

// 二是类似于 JQuery/Node 的插件和模块开发。
(function($) { 
        //代码
 } )(jQuery)

//  5.神马是 NaN，它的类型是神马？怎么测试一个值是否等于 NaN?
// NaN 是 Not a Number 的缩写，JavaScript 的一种特殊数值，其类型是 Number，可以通过 isNaN(param) 来判断一个值是否是 NaN：
