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
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
}

var partition = function (array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)], //{8}
    i = left, //{9}
    j = right; //{10}
  while (i <= j) { //{11}
    while (array[i] < pivot) { //{12}
      i++;
    }
    while (array[j] > pivot) { //{13}
      j--;
    }
    if (i <= j) { //{14}
      swap(array, i, j); //{15}
      i++;
      j--;
    }
  }
  return i; //{16}
};
//选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位

//二分查找
function binarySearch(target, arr) {
  var start = 0;
  var end = arr.length-1;

  while (start<=end){
      var mid = parseInt(start+(end-start)/2);
      if(target==arr[mid]){
          return mid;
      }else if(target>arr[mid]){
          start = mid+1;
      }else{
          end = mid-1;
      }
  }
  return -1;
}

//斐波那契数列
function fib(n) {
  if (n < 2 && n >= 0) return n
  return fib(n - 1) + fib(n - 2)
}
fib(10)

function fib(n) {
  let array = []
  array[0] = 0
  array[1] = 1
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}

fib(10)
//动画
var count = 0    
function animation() {
  var element = document.querySelector('#xxx')
  var colors = ['red', 'yellow', 'blue']
  console.log(element.style.backgroundColor)
  if(element.style.backgroundColor != 'blue') {
    element.style.backgroundColor = colors[count++]
    requestAnimationFrame(animation)
  }
}

requestAnimationFrame(animation)

var xhr = new XMLHttpRequest()
var url = '/index'
xhr.open('posy', url)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status >= 200 && XMLHttpRequest.status < 300) {
      console.log(xhr.responseText)
    }
  }
}
xhr.send('hello')

//哈希 数组去重
var a = [4,2,5,6,3,4,5];
var hashTable = {};
for (var i = 0; i < a.length; i++) {
    if (a[i] in hashTable)
        continue;
    else {
        hashTable[a[i]] = true;
    }
}
console.log(Object.keys(hashTable))

for(key in hashTable) {
    console.log(key)
}

function unique(arr){
	var res = [];
	var hash = {};
	for(var i = 0; i < this.length; i++){
		if(!hash[arr[i]]){
			res.push(arr[i]);
			hash[arr[i]] = true;
		}
	}
	return res;
}

//bind函数
Function.prototype.bind3 = function(context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}