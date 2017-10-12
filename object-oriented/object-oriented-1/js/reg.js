/**
 *  正则表达式的语法：
 *  var reg = /正则表达式主体/修饰符（可选）
 *  正则表达式的修饰符有：
 *  1. i (执行对大小写不敏感的的匹配)
 *  2. g (执行全局匹配（查找所有匹配，而不是在找到第一个后停止匹配）)
 *     非全局匹配每次执行都会从头开始匹配
 *     全局匹配每次执行都会从上次匹配到的位置重新开始匹配（可以通过reg.lastIndex获取上次匹配到的位置）
 *  3. m (执行多行匹配)
 * */ 

/** 一：
 *  ^表示字符串的开头，$表示结尾
 *  1./^a/ =>表示以a开头
 *  2./a$/ =>表示以a结束
 *  3./^ab$/ => 表示以ab开头以ab结束（其实就是ab）
 *  4./ab/ =>表示任何包含ab的字符串
 * */ 

// var reg1 = /^a/
// console.log(reg1.test('123a'), reg1.test('a123')) // false, true
// var reg2 = /b$/
// console.log(reg2.test('b123'), reg2.test('123b')) // false, true
// var reg3 = /^ab$/
// console.log(reg3.test('ab'), reg3.test('123ab123')) // true, false
// var reg4 = /ab/ 
// console.log(reg4.test('asb'), reg4.test('bbabbb')) // false, true

/** 二：
 *  *号表示0个或者多个
 *  +号表示1个或者多个
 *  ?号表示0个或者1个
 * */ 
// // 1./ab*/ 表示一个a后面跟着0个或者多个b
// var reg1 = /ab*/
// console.log(reg1.test('abbb'))

// // 2./ab+/ 表示一个a后面至少跟着一个b

// var reg2 = /ab+/
// console.log(reg2.test('a'), reg2.test('ab'), reg2.test('abbb'), reg2.test('axxb')) // false, true, true, false

// // 3./ab?/ 表示一个a后面跟着0个或者1个b

// var reg3 = /ab?/
// console.log(reg3.test('a'), reg3.test('ab'), reg3.test('abbb'), reg3.test('axxb')) // true, true, true, true

// // 4./a?b+$/ 表示字符串结尾是由0个或者1个a后面跟着一个或者多个b组成的

// var reg4 = /a?b+$/
// console.log(reg4.test('a'), reg4.test('ab'), reg4.test('abbb'), reg4.test('xxb')) // false, true, true, true


/** 三：
 *  {num1, num2} 表示重复的次数的范围(num1表示下限，num2表示上限，下限是必须设置的，上限可以不做设置)
 * */ 

// 1./ab{2}/ 表示字符串中有一个a后面至少有两个b的子串

// var reg1 = /ab{2}/ // 等价于 var reg1 = /ab{2,}/
// console.log(reg1.test('ab'), reg1.test('abb'), reg1.test('awwbb'), reg1.test('sssabb')) // false, true, false, true

// // 2./ab{2,5}/ 表示字符串中有一个a后面跟着至少2个b最多5个b的子串

// var reg2 = /ab{2,5}/
// console.log(reg2.test('ab'), reg2.test('abb'), reg2.test('abbbb'), reg2.test('abbbbbb22'), reg2.test('avbbbb')) // false, true, true, false, false


/** 四：
 *  | 表示或的意思
 *  /hi|hello/ 表示字符串中含有hi或者hello
 * */ 
// var reg1 = /hi|hello/
// console.log(reg1.test(',,hias'), reg1.test('hello,asd'), reg1.test('hihello')) // true, true, true


/**
 *  .符号，可以代替任意的字符
 *  /a.[0-9]/ 表示a后面跟一个任意字符和一个数字
 * */ 

// var reg1 = /a.[0-9]/
// console.log(reg1.test('ac2'), reg1.test('acc2')) // true, false

/**
 *  [] 表示匹配中括号里面的任意一个字符
 *  [ab] 表示匹配a或者b相当于 a|b
 *  [a-e] 表示匹配a-e之间的任意一个字符 相当于（a|b|c|d|e）或者 [abcde]
 *  ^[a-zA-Z] 表示字符串的开头必须是一个字母
 *  [0-9]%  表示%前面必须是一个数字
 *  [^a]    表示匹配除过a之外的字符
 * */ 
// var reg2 = /[^a]/
// console.log(reg2.test('a'), reg2.test('88as'), reg2.test('dda'))


var reg3 = /^[1-9][0-9]{0,3}$/

console.log(reg3.test(0), reg3.test(1), reg3.test(9999), reg3.test(10000), reg3.test(1.1))

/**
 *  \w  查找单词字符
 *  \W  查找非单词字符
 *  \d  查找数字
 *  \D  查找非数字字符
 *  \s  查找空白字符
 *  \S  查找非空白字符
 *  \b  匹配单词边界
 *  \B  匹配非单词边界
 * */ 

