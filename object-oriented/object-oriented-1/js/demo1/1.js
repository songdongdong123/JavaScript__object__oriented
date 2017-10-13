/**
 * 变量类型和计算
 * */ 

/**
 * 变量类型
 * 1.值类型和引用类型
 * 2.typeof运算符详解
 * */ 

/**
 * 1.值类型（相互不会影响）
 * 2.引用类型（会被影响因为因为是地址的引用） 
 *   对象、数组、函数
 *   特点：无限扩展属性
 * */ 

/**
 * 变量计算 - 强制类型转换
 * 1.字符串拼接
 * 2.==运算符
 * 3.if语句
 * 4.逻辑运算符(&&,||,!,?)
 * 如何将一个变量当成布尔值使用？ 给变量使用!! 例如 a = 100, !!a = true
 * 
 * */ 

// 1.js中使用typeof能得到那些类型
    undefined
    string
    number
    object
    boolean
    function
    typeof运算符的特点：只能区分出值类型和function，不能区分出其他引用类型

// 2.何时使用===何时使用==
  undefined == null =>true
  // 这里除了这个情况用==其他情况全部使用===
  if(obj.a == null) {
    // 这里相当于obj.a === null || obj.a === undefined
    // jquery源码里面推荐这种写法
  }

// 3.js中有哪些内置函数 --- 数据封装类对象
  String
  Object
  Number
  Boolean
  Funtion
  Error
  RegExp
  Date
// 4.js变量按照存储方式区分为哪些类型，并描述其特点
  值类型和引用类型
  特点：引用类型节省内存，值类型是分块存储的，引用类型是通过地址指向某个区域的

// 5.如何理解JSON
  JSON只不过是js内置的一个对象而已(数据格式)
  有两个方法：
  JSON.stringify()
  JSON.parse()