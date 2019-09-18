{
  //继承
    function Parent(name) {
      this.name = name
    }

    Parent.prototype.getName = function () {
      return this.name
    }

    function Child(name, age) {
      Parent.call(this, name)
      this.age = age
    }

    Child.prototype = new Parent('qq')

  var instance = new Child('zhangsan', 18)

  function Parent(name) {
    this.name = name
  }

  Parent.prototype.getName = function () {
    return this.name
  }

  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }


  Child.prototype = Object.create(Parent.prototype) //创建了一个空对象，并用参数作为这个对象的__proto__

  var instance = new Child('zhangsan', 18)

}
{
  //发布订阅模式
  var Observer = function() {
    let subs = {}
    return {
      getSubs() {
        return subs
      },
      on(type, callback) {
        if(!subs[type]) {
          subs[type] = [callback]
        } else {
          subs[type].push(callback)
        }
      },
      emit(type, args) {
        if(subs[type]) {
          subs[type].forEach(fn => {
            fn.call(this, args)
          })
        } else {
          throw new Error(`event ${type} not exist!`)
        }
      },
      remove(type) {
        if(subs[type]) {
          delete subs[type]
        }
      },
      once(type, callback) {
        this.on(type, (args) => {
          callback(args)
          this.remove(type)
        })
      }
    }
  }()
}

{
  var a = [1, 2, 3]
  //实现数组的forEach方法
  Array.prototype.forEach = function(fn) {
    // 这里的this为数组实例
    let len = this.length
    for(let i = 0; i < len; i++) {
      fn(this[i], i, this)
    }
  }
  // a.forEach(item => {
  //   console.log(item)
  // })

  //实现数组的map方法
  var a = [1, 2, 3]
  Array.prototype.map = function(fn) {
    let length = this.length
    let result = []
    for(let i = 0; i < length; i++) {
      result.push(fn(this[i], i, this))
    }
    return result
  }
  a.map(item => {
    return item * 2
  })

  //实现数组的filter方法
  var a = [1, 2, 3]
  Array.prototype.filter = function(fn) {
    let length = this.length
    let result = []
    for(let i = 0; i < length; i++) {
      if(fn(this[i], i, this)) {
        result.push(this[i])
      }
    }
    return result
  }
  a.filter(item => {
    return item > 2
  })

  //实现数组的reduce方法
  var a = [1, 2, 3]
  Array.prototype.reduce = function(fn, initValue) {
    if(!initValue) {
      //表示没有传入初始值
      let length = this.length
      let accumulator
      for(let i = 1; i < length; i++) {
        if(i === 1) {
          accumulator = fn(this[0], this[i], i, this)
        } else {
          accumulator = fn(accumulator, this[i], i, this)
        }
      }
      return accumulator
    } else {
      let length = this.length
      let accumulator = initValue
      for(let i = 0 ; i < length; i++) {
        accumulator = fn(accumulator, this[i], i, this)
      }
      return accumulator
    }
  }
  console.log(  a.reduce((a, b) => {
    return a + b
  }, 10))
  var b = [[0, 1], [2, 3], [4, 5, 6]]
  console.log(b.reduce((total, currentValue) => {
    return total.concat(currentValue)
  }, []))
}

{
  //原生AJAX
// let xhr = new XMLHttpRequest()
// xhr.open(method, url)
// xhr.onreadystatechange = function() {
 // 4是数据已经全部拿到，3是拿到了一部分 2是调用了send方法， 1是调用了open方法， 0是未调用open方法 
//   if(xhr.readyState === 4) {
//     if(xhr.status >= 200 && xhr.status < 300) {
//       console.log(xhr.responseText)
//     }
//   }
// }
}
{
  //数组去重
  var a = [1, 2, 2, 3, 3, 1, 5]
  b = a.filter((value, index, arr) => {
    return arr.indexOf(value) === index
  })
  a.reduce((accumulator, pre, index, arr) => {
    if(arr.indexOf(pre) === index) {
      accumulator.push(pre)
    }
    return accumulator
  }, [])
  var hash = {}
  a.forEach((item, index) => {
    if(!hash[item]) {
      hash[item] = true
    }
  })
  b = Object.keys(hash)

}
