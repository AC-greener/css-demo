//reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
var a = [1, 2, 3, 5, 1, 6]
let b = a.map(value => {
  return value *= 2
})
a.filter(value => {
  return value > 3
})

//作为map
a.reduce((total, currentValue) => {
  console.log('total', total)
  console.log('next', currentValue)
  total.push(currentValue * 2)
  return total
}, [])

//作为filter使用
let initValue = []
a.reduce((total, currentValue) => {
  if (currentValue > 3) {
    total.push(currentValue)
  }
  return total
}, initValue)

//数组降维 
[[0, 1], [2, 3], [4, 5]].reduce((total, currentValue) => {
  return total.concat(currentValue)
}, initValue)
a = []
a.find()
a.includes()
a.from()