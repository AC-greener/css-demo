// 简单的工厂模式: 解决多个相似的问题

class Man {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name
  }
}

var person = new Man('zhang')


//单例模式
  class Singleton {
    constructor(name) {
      this.name = name
    }
  }

  Singleton.getInstance = (function() {
    let instance
    return function(name) {
      if (!instance) {
        instance = new Singleton(name)
      }
      return instance
    }
  })()

  let s1 = Singleton.getInstance('zhang')
  console.log(s1)
let s2 = Singleton.getInstance()
// 装饰器模式
class Circle {
  draw() {
    console.log('画一个圆')
  }

}
class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setBorder()
  }
  setBorder() {
    console.log('加一个边框')
  }
}
let circle = new Circle()
let dec = new Decorator(circle)
dec.draw()