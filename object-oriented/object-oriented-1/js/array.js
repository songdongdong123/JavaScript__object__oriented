/**
 *  数组对象的属性：
 * */ 

// 1.concat()  链接两个或者更多数组(返回链接后的数组，不改变原数组)
// var arr = [1,2,3]
// var arr1 = [4,5,6]
// var temp = arr.concat(arr1)
// console.log(temp)
// console.log(arr)
// console.log(arr1)

// 2.copyWithin() 从数组的指定位置拷贝元素到另一个指定位置 (返回调整位置后的新数组，并且原数组被改变)

// var arr = [1,2,3]
// var t = arr.copyWithin(0,2)
// console.log(t)
// console.log(arr) 


// 3.every(function)  检测数值元素的每一个元素是否都符合条件,接收一个函数作为参数

// var arr = [1,2,3]
// var test = (age) => {
//   console.log(age)
//   return age > 0
// }
// var suc = arr.every(test)
// console.log(suc)


// 4.fill(arg)  使用一个固定值来填充数组 （会将原数组中的所有元素替换成指定值）  返回一个新的数组，并且原数组被改变

// var arr = [1,2,3]
// var t = arr.fill('oo')
// console.log(t)
// console.log(arr)

// 5.find(function)   用来查找符合条件的元素，返回查询到的结果如果没有找到返回undefined （以函数所谓参数传入）

// var arr = [1,2,3]
// var test1 = (age) => {
//   return age > 2
// }
// var test2 = (age) => {
//   return age > 3
// }
// console.log(arr.find(test1))
// console.log(arr.find(test2))


// 6.finedIndex() 和find类似，不过find返回的元素，findIndex返回的是该元素的索引 (如果没有找到就返回-1)

// var arr = [1,2,3]
// var test1 = (age) => {
//   return age > 2
// }
// var test2 = (age) => {
//   return age > 3
// }
// console.log(arr.findIndex(test1))
// console.log(arr.findIndex(test2))

// 7.forEach(callback(value, index, arr)) 用来遍历数组，数组中的每一个元素都会执行一遍回调函数，回调函数接收三个参数，分别为数组的元素，索引，和数组本身

// var arr = [1,2,3]
// var temp = arr.forEach((value, index, input) => {
//   console.log(`${value}+${index}+${arr}`)
//   input[index] = value*10
// })
// console.log(temp)
// console.log(arr) // 原数组被改变

// 9.indexOf(arg) 用来查找数组中指定元素的位置（返回该元素的索引，如果没有找到返回-1）(从第一个元素开始查找)

// var arr = [1,2,3]
// console.log(arr.indexOf(1))
// console.log(arr.indexOf(0))

// 10.lastIndexOf() 与indexOf()功能一样，不过lastIndexOf()是从数组的最后一个元素向前查找的

// 11.map()也是遍历数组，他与forEach()的区别是，map会返回一个新的数组，不改变原数组，forEach会改变原数组
// map()中回调函数也有三个参数，和forEach类似，只是顺序不同，map回调函数的第一个参数是数组中的元素，第二个参数是元素的索引，第三个参数是数组本身

// var arr = [1,2,3]
// var x = arr.map((value,index,input) => {
//   console.log(`${value}+${index}+${input}`)
//   return value*10
// })
// console.log(x)
// console.log(arr)

// 12.pop()删除数组的最后一个元素，返回被删除的元素

// var arr= [1,2,3]
// var x = arr.pop() // 返回被删除的元素
// console.log(x)
// console.log(arr) // 原数组被改变

// 13.shift() 删除数组的第一个元素，返回被删除的元素，改变原数组

// var arr = [1,2,3]
// var  x = arr.shift()
// console.log(x)
// console.log(arr)

// 14.push() 在数组的最后添加一个, 返回更新后的新数组，并且原数组也被改变
// var arr = [1,2,3]
// var x = arr.push(4)
// console.log(x)
// console.log(arr)

// 15.unshift() 在数组的最前面添加一个元素（返回更新后的数组，并且原数组也被改变），他和push的区别在于，一个是前一个后
// var arr = [1,2,3]
// var x = arr.unshift(4)
// console.log(x)
// console.log(arr)

// 16.reverse() 用于翻转数组(返回被翻转后的数组，并且改变原来的数组)
// var arr = [1,2,3]
// var x = arr.reverse()
// console.log(x)
// console.log(arr)

// 17.sort() 用于数组排序 （返回更新后的数组，改变原数组）

// (1).默认，如果是数字就是按升序排列，如果是字符串就按字典顺序排列

// 数字：
// var arr = [2,1,3]
// var x = arr.sort()
// console.log(x)
// console.log(arr)

// 字符串:
// var arr = ['sde', 'dd', 'mm', 'aa']
// var x = arr.sort()
// console.log(x)
// console.log(arr)

// (2).接收一个函数，作为排序的条件

// var arr = [3,4,25,2]
// // 升序
// var x = arr.sort((a,b) => {return a-b})
// // 降序
// var x = arr.sort((a,b) => {return b-a})
// console.log(x)
// console.log(arr) 


// 18.slice(),选取数组中的一部分，并返回一个新数组(不改变原数组)

// (1).一个参数的时候表示从第几个元素开始，然后到数组的最末未结束
// var arr = [1,2,3,4,5]
// var x = arr.slice(2)
// console.log(x)
// console.log(arr)

// (2).两个参数的时候表示要截取元素的范围 (第一个参数表示开始，第二个参数表示结束，注意：如果结束的参数大于开始的参数，返回一个空数组)
// var arr = [1,2,3,4,5]
// var x = arr.slice(0,2)
// console.log(x)
// console.log(arr)


