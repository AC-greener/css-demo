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
  console.log(instance)

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
  console.log(instance)

}
{
  //发布订阅模式
  let Observer = function() {
    _message = {}
    return {
      on(type, callback) {
        if(_message[type]) {
          _message[tyep] = [callback]
        } else {
          _message[tyep].push(callback)
        }
      },
      emit(type, args) {
        if(!_message[type]) {
          return 
        }
        let events = {
          type,
          args: args || {}
        }
        let length = _message[type].length
        for(let i = 0; i < length; i++) {
          _message[type][i].call(this, events)
        }
      },
      remove(type) {
        if(_message[type]) {
          delete _message[type]
        }
      },
      once(type, callback) {
        on(type, (args) => {
          callback(args)
          remove(type)
        })
      }
    }
  }
}
Array.prototype.forEach = function(fn) {
  console.log(this)
  let len = Array.length
  for(let i = 0; i < len; i++) {
    fn(this[i], i, this)
  }
}
let xhr = new XMLHttpRequest()
xhr.open(method, url)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText)
    }
  }
}
