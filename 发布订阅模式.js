  //发布订阅模式
  let Observer = function() {
    _message = {}
    return {
      //将订阅者注册的消息推到消息队列中，接收的参数时消息的类型和如何处理消息
      on(type, callback) {
        if(_message[type]) {
          _message[tyep] = [callback]
        } else {
          _message[tyep].push(callback)
        }
      },
      //发布事件
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
      //删除某个类型对应的回调函数
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