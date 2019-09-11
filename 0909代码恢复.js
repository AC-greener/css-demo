// 冒泡
sort = function(array) {
  var length = array.length
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        sway(array, j, j + 1)
      }
    }
  }
}

function quickSort(array) {
  let length = array.length
  let left = 0
  let right =  length - 1
  let index
  if(array.length > 1) {
    index = partition(array, left, right)
    if(index - 1 > left) {
      quickSort(array, left, index - 1)
    }
    if(index < right) {
      quickSort(array, index, right)
    }
  }
}

function fn() {

}
var cd = false
button.onclick = function() {
  if(!cd) {
    cd = true
    setTimeout(() => {
      fn()
      cd = false
    }, 3000)
  }
}

function fn(){}
var timerId = null
button.onclick = function() {
  if(timerId) {
    window.clearTimeout(timerId)
  }
  timerId = setTimeout(() => {
    fn()
    timerId = null
  }, 2000)
}