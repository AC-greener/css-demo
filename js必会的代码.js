//继承
{
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
//发布订阅模式
{
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
//实现原生数组方法
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
  console.log(a.reduce((a, b) => {
    return a + b
  }, 10))
  var b = [[0, 1], [2, 3], [4, 5, 6]]
  console.log(b.reduce((total, currentValue) => {
    return total.concat(currentValue)
  }, []))
}
//原生AJAX
{
let xhr = new XMLHttpRequest()
xhr.open(method, url)
xhr.onreadystatechange = function() {
//  4是数据已经全部拿到，3是拿到了一部分 2是调用了send方法， 1是调用了open方法， 0是未调用open方法 
  if(xhr.readyState === 4) {
    if(xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText)
    }
  }
}
}
//数组去重
{
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
//数组拍平
{
  var a = [1,2, [3, [7, 8], 4, 5], 2]
  var b = [1,2, 3, 4, 5, 2]
  function fn(accumulator, current, index, array) {
    if(!Array.isArray(current)) {
      accumulator.push(current)
      return accumulator
    } else {
      return accumulator.concat(current.reduce(fn, []))
    }
  }
  console.log(a.reduce(fn, []))
}
//排序 
{
  var swap = function(array, index1, index2){
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }
  let bubbleSort = function(arr) {
    let length = arr.length
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - i; j++) {
        if(arr[j] < arr[j+1]) {
          swap(arr[j], arr[j+1])
        }
      }
    }
  }
  //选择排序思路：找到数组中最小的元素放在第一位，接着找到第二小的，放在第二位
  let chooseSort = function(arr) {
      let length = arr.length
      for(let i = 0; i < length; i++) {
        let minIndex = i
        for(let j = i; j < length; j++) {
          if(arr[j] < arr[minIndex]) {
            minIndex = j
          }
        }
        swap(array, i , minIndex)
      }
  }
  //插入排序思路：假定第一个元素已经排序了，从第二个元素开始排，第二个元素是放在原地还是插入到第一个元素之前呢？
  let insertSort = function(arr) {
    let length = arr.length
    let j
    let current
    for(let i = 1; i < length; i++) {
      j = i
      current = arr[i]
      while(j > 0 && current < arr[j - 1]) {
        arr[j] = arr[j - 1]
        j--
      }
      arr[j] = current
    }
  }
  //归并排序思路：将原始的数组切分成较小的数组，直到每个数组只有一个位置，接着将小数组归并成大数组
  let mergeSort = function() {

  }
  function sliceArray(arr) {
    var length = arr.length
    if(length === 1) {
      return arr
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid)
      right = arr.slice(mid, length)
    return merge(sliceArray(left), sliceArray(right))
  }
  function merge(left, right) {
    var i = 0, j = 0
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        result.push(left[i++])
      } else {
        result.push(right[j++])
      }
    }
    while(i < left.length) {
      result.push(left[i++])
    }
    while(j < right.length) {
      result.push(right[j++])
    }
    return result
  }
  //快排思路：运用递归，找一个基准数，比他小的放在左边，比他大的放在右边
  let quickSort = function() {
    quick(array, 0, array.length - 1)
  }
  let quick = function(array, left, right) {
    let index
    if(array.length > 1) {
      index = partition(array, left, right)
      if(index - 1 > left) {
        quick(array, left, index - 1)
      }
      if(index < right) {
        quick(array, index, right)
      }
    }
  }
  let partition = function(array, left, right) {
    let reference = array[Math.floor((left + right) / 2)],
      i = left,
      j = right
    while(i <= j) {
      while(array[i] < reference) {
        i++
      }
      while(array[j] > reference) {
        j--
      }
      if(i <= j) {
        swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }
}
//二叉树
{
  let preOrder = function() {
    preOrderTree(root, callback)
  }
  let preOrederTree = function(root, callback) {
    let node = root
    if(node) {
      callback(node.key)
      preOrederTree(node.left, callback)
      preOrederTree(node.right, callback)
    }
  }
  let inOrederTree = function(root, callback) {
    let node = root
    if(node) {
      inOrederTree(node.left, callback)
      callback(node.key)
      inOrederTree(node.right, callback)
    }
  }
  //前序
  var preorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let stack = []
    stack.push(root)
    while(stack.length) {
      let current = stack.pop()
      result.push(current.val)
      if(current.right) {
        stack.push(current.right)
      }
      if(current.left) {
        stack.push(current.left)
      }
    }
    return result
  };
  function fn(root) {
    if(!root) return
    let result =[]
    let stack = []
    stack.push(root)
    while(stack.length) {
      let current = stack.pop()
      result.push(current.val)
      if(current.right) {
        stack.push(current.right)
      }
      if(current.left) {
        stack.push(current.left)
      }
    }
  }
  function fn(root) {
    let result = []
    let stack = []
    while(root) {
      stack.push(root)
      root = root.left
    }
    while(stack.length) {
      let current = stack.pop()
      result.push(current)
      current = current.right
      while(current) {
        stack.push(current)
        current = current.left
      }
    }
    return result
  }
  //中序
  var inorderTraversal = function(root) {
    let result = []
    let stack = []
    while(root !== null) {
     stack.push(root)
     root = root.left
    }
    while(stack.length) {
      let current = stack.pop()
      result.push(current.val)
      current = current.right
      while(current) {
        stack.push(current)
        current = current.left
      }
    }
    return result
 };
 var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  //创建队列并把起始节点入队(第一层)
  let queue = [],
    result = []
  queue.push(root)
  while (queue.length !== 0) {
    //从上一层节点拓展到下一层
    let level = [] //保存当前层过结果
    let size = queue.length //当前层的size
    for (let i = 0; i < size; i++) {
      node = queue.shift()
      level.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(level)
  }
  return result
};
}
{
//两个数组求交集
//方法1
let a = [1, 2, 3, 2]
let b = [2, 2]
function fn(arr1, arr2) {
  let result = []
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr[i])
      }
    }
  }
  console.log(result)
}
//方法2
a.filter(v=>b.includes(v))
//3
a.filter(function(v){return b.indexOf(v) > -1})

}