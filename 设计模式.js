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

console.log(person)

//单例模式
var Singleton = function(name){
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function(){
  return this.name;
}
// 获取实例对象
function getInstance(name) {
  if(!this.instance) {
      this.instance = new Singleton(name);
  }
  return this.instance;
}
// 测试单体模式的实例
var a = getInstance("aa");