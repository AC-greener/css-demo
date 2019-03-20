
function fn() {
  var _value = 0
  return {
    next: function() {
      _value += 1
      if(_value === 5) {
        return { value: _value, done: true }
      } else {
        return { value: _value, done: false }
      }
      
    }
  }
}

function* fn2() {
  var value = 0
  while(true) {
    value += 1
    //yeild 理解为退让
    yield value 
  }
}
a = fn2()
a.next()

//自己实现迭代，让object也可以迭代
var obj = {
  name: 'zhangsan',
  age: 18,
  sex: 'man'
}
obj[Symbol.iterator] = function* () {
  var keys = Object.keys(obj)
  for(var i = 0; i < keys.length; i++) {
    yield obj[keys[i]]
  }
}
for(key of obj) {
  console.log(key)
}