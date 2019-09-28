// 1.格式化金钱，每千分位加逗号，需要注意的是：const target = '123456789' ，然后通过target.format()这样子调用
var target = '123456789'
String.prototype.format = function () {
  var result = []
  for (var i = 0; i < this.length; i++) {
    result.push(this[i])
    if ((i + 1) % 3 === 0 && i != this.length - 1) {
      result.push(',')
    }
  }
  return result.join('')
}
target.format()

//4.给定一个数组，返回所有的数字，如： [1,'3',false,null,100] ===> [1, 3, 100]
arr = [1, '3', NaN, false, 100]
var x = arr.map(item => {
  if (item) {
    return Number(item)
  }
})
//5.实现一个函数，返回参数的数据类型（主要是考察判断数组跟对象，分别写了instanceof 跟 isArray两种实现）
function a() {}

function judge(value) {
  if (value instanceof Array) {
    console.log('Array')
  }
  if (!value && (typeof value == 'object')) {
    console.log('null')
  }
  if (!Array.isArray(value) && value instanceof Object) {
    console.log('object')
  }
  if (typeof value === 'undefined') {
    console.log('undefined')
  }
}
// judge([])
// judge(null)
// judge(undefined)



// 6.实现函数
// f(1).val = 1
// f(1)(2).val = 3
// f(1)(2)(3).val = 6
// f(10)(100)(1000)(10000).val = 11110
// 实现这样的函数，要求调用深度不限，即可以f(10)(1000)(1)(2)/*中间可能无数个*/(剩)(余)(的)

function f(val) {
  function inner(innerVal) {
    return f(val + innerVal);
  }
  inner.val = val;
  return inner;
}
//7.有一个 字符串里面有很多is 请写一个方法只保留一个is          
var a = 'aisaaabbblkismmqwis'
var s = a.slice(a.indexOf('is') + 2)
// console.log(s)
s = s.replace(/is/g, '')
// console.log(s)
s = a.slice(0, a.indexOf('is') + 2).concat(s)
// console.log(s)
(/^\s+|\s+$/)
// String.replace(/^\s+|\s+$/, '')


// setTimeout(() => { //f1

//   setTimeout(() => {   //f2
//     console.log('1');
//   }, 0)

//   console.log('2');

//   setTimeout(() => {  //f3
//     console.log('3');
//   }, 200)

// }, 0)
// setTimeout(() => {//f4
//   console.log('4');
// }, 200);
// console.log('5')

//8.给定一个字符串如下adaasdfjklashfjqqqqqq，请统计字符串中出现最多的字母和次数
function fn(str) {
  var hash = {}
  for(let i = 0; i < str.length; i++) {
    if(hash[str[i]]) {
      hash[str[i]]++
    } else {
      hash[str[i]] = 1
    }
  }
  let keys = Object.keys(hash)
  let maxValue = -1, maxKey = ''
  for(let i = 0; i < keys.length; i++) {
    if(hash[keys[i]] > maxValue) {
      maxValue = hash[keys[i]]
      maxKey = keys[i]
    }
  }
  console.log(maxKey, maxValue)
}
// fn('aaaaaaabbbc')


// 9.getSum([1, '2', [3, [4, 5]]])
// => 13

var result = 0
function getSum(arr) {
  arr.forEach((item) => {
    if(item instanceof Array) {
      getSum(item)
    } else {
      if(typeof item === 'number') {
        result += item
      }
    }
  })
  return result
}
getSum([1, '2', [3, [4, 5]]])
console.log(result)
//10. 找出数组中出现次数大于等于n的数

Array.prototype.find = function(n) {
  var hash = {}, result = []
  this.forEach((item) => {
    if(hash[item]) {
      hash[item]++
    } else {
      hash[item] = 1
    }
  })
  var keys = Object.keys(hash)
 
  keys.forEach(item => {
    if(hash[item] >= n) {
      result.push(item)
    }
  })
  console.log(result)
}
var a = [1,2,3,3,2]
var b = [1,1,1,3,3,2]

//11. 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式。
function sum(x) {
  if(arguments.length === 1) {
    return function(y) {
      return x + y
    }
  } else {

  }
}
sum(1)(2)

//12, 如何判断一个js对象为空
/* json数据类型
数字（整数或浮点数）
字符串（在双引号中）
逻辑值（true 或 false）
数组（在中括号中）
对象（在大括号中）
null
*/
JSON.stringify(s) === '{}'
Object.keys().length === 0
function empty(obj){
  for (let key in obj){
    console.log(false);    //非空
}
  console.log(true);       //为空
}
/*
头条题目：
我的第一个详细讲解https过程，
第二个手写promise.all
第三个二叉树路径和，都整自闭了😂😂
*/

//两个数组求交集
//方法1
var a1 = [1, 2, 3, 2]
var a2 = [2, 2]
function fn(arr1, arr2) {
  let result = []
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr[i])
      }
    }
  }
  console.log(result)
}
//方法2
a.filter(v=>b.includes(v))
//3
a.filter(function(v){return b.indexOf(v) > -1})

