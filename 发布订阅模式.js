var Observer = (function() {
  var _message = {}
  return {
    //将订阅者注册的消息推到消息队列中，接收的参数时消息的类型和如何处理消息
    regist(type, fn) {
      if(typeof _message[type] === 'undefined') {
        _message[type] = [fn]
      } else {
        _message[type].push(fn)
      }
      console.log(_message)
    },
    //发布事件
    fire(type, args) {
      if(!_message[type]) {
        return
      }
      let events = {
        type: type,
        args : args || {}
      }
      let length = _message[type].length
      for(let i = 0; i < length; i++) {
        _message[type][i].call(this, events)
      }
    },
    //删除某个类型对应的回调函数
    remove(type, fn) {
      if(_message[type] instanceof Array) {
        let length = _message[type].length
        for(let i = 0; i < length; i++) {
          if(_message[type][i] === fn) {
            _message[type].splice(i, 1)
          }
        }
      }
    }
  }
})()
Observer.regist('test', function(e) {
  console.log(e.type, e.args.msg)
})
Observer.fire('test', {msg: 'hello tongtong'})