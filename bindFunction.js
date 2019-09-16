
// 第一版
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        self.apply(context);
    }
 
}

// 第二版
Function.prototype.bind2 = function (context) {
 
  var self = this;
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
      // 这个时候的arguments是指bind返回的函数传入的参数
      var bindArgs = Array.prototype.slice.call(arguments);
      self.apply(context, args.concat(bindArgs));
  }

}

// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
 
    var fbound = function () {
 
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fbound.prototype = this.prototype;
    return fbound;
}

Function.prototype.bind3 = function(context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}
Function.prototype.bind = function(context) {
    let self = this
    let args = Array.prototype.slice()
}

Array.isArray()
[1] instanceof Array