// 1.如何准确的判断一个变量数组类型
var arr = []
console.log(Object.prototype.toString.call(arr))
// 2.写一个原型链继承的例子
// 有老师和学生都是人，人都有名字和年龄；
// 老师和学生都要吃饭
// 老师的工作是教书育人
// 学生的工作是好好学习
var Person = function (name, age) {
  this.name = name
  this.age = age
}
var teacher = function (name, age) {
  Person.call(this, name, age)
  this.working = function () {
    console.log('教书育人')
  }
}
var student = function (name, age) {
  Person.call(this, name, age)
  this.working = function () {
    console.log('好好学习')
  }
}

var tec = new teacher('老师', 90)
var stu = new student('学生', 45)

tec.working()
stu.working()