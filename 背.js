// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

// 让我们来实现一下冒泡排序：
var bubbleSort = function () {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

function swap(array, i, j) {
  var temp
  temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
//快速排序 
//重复这个过程，直到左指针超过了右指针
var quickSort = function (array, left, right) {
  var index; 
  if (array.length > 1) { 
    index = partition(array, left, right); 
    if (left < index - 1) { 
      quick(array, left, index - 1); 
    }
    if (index < right) { 
      quick(array, index, right); 
    }
  }
};