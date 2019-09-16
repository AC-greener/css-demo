let a = 1
let b = 1
let c = 1
let [a, b, c] = [1, 2, 3]

let [foo, [[bar], baz]] = [1, [[2], 3]]

let [, , third] = ['a', 'b', 'c']

let [x, ,y] = [1, 2, 3]

let [head, ...tail] = [1, 2, 3, 4]
let [...tail2] = [1, 2, 3, 4]

let [foo, bar] = [1]

let [x, y, z] = new Set([1, 2, 3])

//解构赋值允许指定默认值

let [foo = 1] = []

let [bar = true, baz] = [, c]

//对象的结构赋值
let {b1, b2} = {b1: 1, b2: 2}

let { foo: baz } = { foo: "aaa", bar: "bbb" };

//对象的解构赋值是下面形式的简写
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };


//字符串的解构赋值

let [a, b, c, d, e] = 'hello'

//函数的解构赋值
function move({x=1, y=2} = {}) {
  return [x, y]
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 变量的解构赋值用途很多。

// 1,交换变量的值

let x = 1;
let y = 2;

[x, y] = [y, x];
// 2,从函数返回多个值
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();



function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();