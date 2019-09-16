//函数节流

function fn() {}
var cd = false  //cd是false代表技能可以使用

button.onclick = function() {
  if(!cd) {  
    cd = true
    setTimeout(()=> {
      fn()
      cd = false
    }, 3000)
  }
}

//防抖
function fn() {}
var timeId = null
button.onclick = function () {
  if(timeId) { //发现闹钟存在就砸掉闹钟
    window.clearTimeout(timeId)
  }
  timeId = setTimeout(() => {
    fn()
    timeId = null
  }, 5000)
}