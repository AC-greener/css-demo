let handler = {
  get: function(target, name){
      console.log('进入get函数', target, name)
      return name in target ? target[name] : 37;
  },
  set:function(target, name, value){
    console.log('setter', target, name)
    // return Reflect.set(target, name, value)
    return target[name] = value
}
};

let data = {
  obj: {
    name: 'zzz'
  }
}
let p = new Proxy(data, handler)
// var data = {
//   obj: {
//     name: 'zz'
//   }
// }
// var proxy = new Proxy(data, {
//   set(target, name, value) {
//     console.log(target, name, value)
//     return Reflect.set(target, name, value)
//   }
// })
