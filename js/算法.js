
// 1.格式化金钱，每千分位加逗号，需要注意的是：const target = '123456789' ，然后通过target.format()这样子调用
var target = '123456789'
String.prototype.format = function() {
  var result = []
  for(var i = 0; i < this.length; i++) {
    result.push(this[i])
    if((i+1) % 3 === 0 && i != this.length-1) {
      result.push(',')
    }
  }
  return  result.join('')
}
target.format()

//4.给定一个数组，返回所有的数字，如： [1,'3',false,null,100] ===> [1, 3, 100]
arr = [1,'3',NaN, false,100]
var x = arr.map(item => {
  if(item) {
    return Number(item)
  }
})
//5.实现一个函数，返回参数的数据类型（主要是考察判断数组跟对象，分别写了instanceof 跟 isArray两种实现）
function a(){}
function judge(value) {
  if(value instanceof Array) {
    console.log('Array')
  }
  if(!value && (typeof value == 'object')) {
    console.log('null')
  }
  if(!Array.isArray(value) && value instanceof Object) {
    console.log('object')
  }
  if(typeof value === 'undefined') {
    console.log('undefined')
  }
}
judge([])
judge(null)
judge(undefined)



// 6.实现函数
// f(1).val = 1
// f(1)(2).val = 3
// f(1)(2)(3).val = 6
// f(10)(100)(1000)(10000).val = 11110
// 实现这样的函数，要求调用深度不限，即可以f(10)(1000)(1)(2)/*中间可能无数个*/(剩)(余)(的)

function f (val) {
    function inner (innerVal) {
        return f(val + innerVal);
    }
    inner.val = val;
    return inner;
}