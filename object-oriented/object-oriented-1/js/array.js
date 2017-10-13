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
// 第一个参数代表复制到指定目标位置
// 第二个参数代表复制的起始位置
// var arr = [1,2,3]
// var t = arr.copyWithin(2,0)
// console.log(t)
// console.log(arr) 


// 3.every(function)  检测数值元素的每一个元素是否都符合条件,接收一个函数作为参数 (不会改变原始数组)
// 只要有一个不满足就会返回false,剩余元素不会检测
// 所有元素都满足条件，则会返回false

// var arr = [1,2,3]
// var test = (age) => {
//   console.log(age)
//   return age > 0
// }
// var suc = arr.every(test)
// console.log(suc)


// 3.1 some(function) 方法用于检测数组中的元素是否满足指定条件（函数提供）。
// some() 方法会依次执行数组的每个元素：
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。

/**
 *  some()和every()和find()区别：
 *    1.every()检测的时候，只要检测到一个不满足条件的元素，就会返回false,后面的元素不再进行检测
 *    2.some() 检测的时候，只有有一个元素，满足条件，就会返回true,后面的元素将不再进行检测
 *    3.find() 检测的时候，当表达式返回true的时候，find()会返回满足条件的第一个元素，如果没有找到会返回undefined
 *    4.filter() 检测的时候，会返回所有满足条件的所有元素，（以数组的形式返回）
 *  some()和every()共同点：
 *    1.对于空数组，都不会进行检测
 *    2.都不会改变原数组
 * */ 


// 4.1 filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// var  arr = [1,2,3,4]
// var x = arr.filter((age) => {
//   return age > 2
// })
// console.log(x)
// console.log(arr)


// 4.fill(arg)  使用一个固定值来填充数组 （会将原数组中的所有元素替换成指定值）  返回一个新的数组，并且原数组被改变

// var arr = [1,2,3]
// var t = arr.fill('oo')
// console.log(t)
// console.log(arr)

// 5.find(function)   用来查找符合条件的元素，返回查询到的结果如果没有找到返回undefined （以函数所谓参数传入）

// var arr = [1,2,3]
// var test1 = (age) => {
//   return age > 0
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
// // // 升序
// // var x = arr.sort((a,b) => {return a-b})
// // // 降序
// var x = arr.sort((a,b) => {return b-a})
// console.log(x)
// console.log(arr) 


// 18.slice(),选取数组中的一部分，并返回一个新数组(不改变原数组)

// (1).一个参数的时候表示从第几个元素开始，然后到数组的最末未结束
// var arr = [1,2,3,4,5]
// var x = arr.slice(2)
// console.log(x)
// console.log(arr)

// (2).两个参数的时候表示要截取元素的范围 (第一个参数表示开始，第二个参数表示结束，注意：如果结束的参数大于开始的参数，返回一个空数组) 不改变原始数组
// var arr = [1,2,3,4,5]
// var x = arr.slice(0,2)
// console.log(x)
// console.log(arr)


// 19.splice() 从数组中添加或者删除元素 (原数组会被改变)

// var arr = [1,2,3,4]
// var x = arr.splice(0,1,3,4)
// console.log(x) // 返回被删除的元素（以数组的形式返回）
// console.log(arr) // 原数组被改变了



// 20.toString() 将数组转化为字符串，并返回结果 (不改变原数组)
// var arr = [1,2,3,4]
// var x = arr.toString()
// console.log(x) // 返回转换后的结果
// console.log(arr) // 原数组不被改变


// 22.valueOf() // 不改变原数组
// var arr = [1,2,3,4]
// var x = arr.valueOf()
// console.log(x) // 返回数组的原始值
// console.log(arr) 


//23.reduce() 将数组元素计算为一个值（从左到右），接收一个处理数组元素的函数作为参数
// 不改变原数组

// var arr = [1,2,3,4]
// var x = arr.reduce((total, num) => {
//   // total 表示计算的初始值
//   // num 表示当前元素
//   console.log(total, num)
//   return total + num
// })
// console.log(x)
// console.log(arr)

// 24.reduceRight() 将数组元素计算为一个值（从右到左）接收一个处理数组元素的函数作为参数
// 不改变原数组

// var arr = [1,2,3,4]
// var x = arr.reduceRight((total, num) => {
//   // total 表示计算的初始值
//   // num 表示当前元素
//   console.log(total, num)
//   return total + num
// })
// console.log(x)


// 26.join() 将数组转换为数组，不改变原数组

// var arr = [1,2,3,4]
// var x = arr.join()
// console.log(x)
// console.log(arr)


/**
 *  改变原始数组的操作：
 *  1.unshift()
 *  2.push()
 *  3.shift()
 *  4.pop()
 *  5.fill() 
 *  6.reverse()
 *  7.sort()
 *  8.slice()
 *  9.splice()
 *  10copyWithin()
 *  数组属性的分类总结：
 * 
 * 一：元素检测：(不改变原数组)
 *  1.find()
 *  2.every()
 *  3.some()
 *  4.filter()
 * 
 * 二：元素查找：(不改变原始数组)
 *  1.indexOf()
 *  2.lastIindexOf()
 * 
 * 三：元素操作：
 *  增加：(改变原始数组)
 *    1.unshift() (从头添加)
 *    2.push()    (从尾添加)
 *  删除：(改变原始数组)
 *    1.shift()   (从头删除)
 *    2.pop()     (从尾删除)
 *  计算：(接收一个函数作为计算方式，最终返回结算的结果) (不改变原始数组)
 *    1.reduce() 
 *    2.reduceRight()
 *  填充：(改变原始数组)
 *    1.fill()
 * 
 * 四：遍历元素：
 *   1.forEach()
 *   2.map()
 * 
 * 
 * 五：数组排序：(改变原始数组)
 *  1.reverse()
 *  2.sort()
 * 
 * 
 * 六：数组转字符串：(不改变原始数组)
 *  1.join()
 *  2.toString()
 * 
 * 
 * 七：截取数组元素：(改变原始数组)
 *  1.slice()
 * 
 * 八：数组的添加/删除 (改变原始数组)
 *  1.splice()
 * 
 * 
 * 九：数组的连接 (不改变原始数组)
 *  1.concat()
 * 
 * 
 * 十：拷贝指定元素到指定位置
 *  1.copyWithin()(改变原始数组)
 * */ 