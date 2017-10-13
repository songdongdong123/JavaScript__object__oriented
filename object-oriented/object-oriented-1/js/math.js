/**
 * Math对象：
 *  Math对象没有构造函数
 * */ 
// Math对象的方法总结


/**
 * Math对象里面对于三角关系的处理
 * 1.acos(x) 计算反余弦值
 * 2.asin(x) 计算反正弦值
 * 3.atan2(x) 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
 * 4.atan2(y,x) 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
 * 5.tan(x) 返回角的正切
 * 6.cos(x) 返回数的余弦。
 * 7.sin(x) 返回数的正弦。
 * */ 

/**
 * Math对象中常用的方法
 * 1.abs(x) 返回x的绝对值
 * 2.ceil(x) 对x进行向上舍入
 * 3.floor(x) 对x进行向下舍入
 * 4.max(x,y,z...) 返回x,y,z...中的最大值
 * 5.min(x,y,z...) 返回x,y,z...中的最小值
 * 6.pow(x,y) 返回x的y次幂
 * 7.sqrt(x) 返回x的平方根
 * 8.round(x) 对x进行四舍五入
 * 9.random() 返回0-1之间的随机数
 * */ 

// 利用max和min求数组中的最值
// var arr = [1,2.8,3,4,5.8]
// console.log(Math.max.apply(null,arr))
// console.log(Math.min.apply(null,arr))
// console.log(Math.min(...arr))

// var daffodil = () => {
//   var temp = []
//   var x,y,z,sum
//   for (var i = 100; i < 1000; i++) {
//     x = parseInt(i / 100)
//     y = parseInt(i % 100 / 10)
//     z = parseInt(i % 100 % 10)
//     sum = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3)
//     if (i == sum) {
//       temp.push(i)
//     }
//   }
//   return temp
// }
// var x = daffodil()
