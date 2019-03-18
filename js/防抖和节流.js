//函数节流

function fn() {}
var cd = false

button.onclick = function() {
  if(cd) {
    //
  } else {
    fn()
    cd = true
    setTimeout(()=> {
      cd = false
    }, 3000)
  }
}

//防抖
var timeId = null
button.onclick = function () {
  if(timeId) {
    window.clearTimeout(timeId)
  }
  timeId = setTimeout(() => {
    fn()
    timeId = null
  }, 5000)
}