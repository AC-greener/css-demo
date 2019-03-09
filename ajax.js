//封装一个简单的ajax
document.addEventListener('click', function(){
  window.ajax({
    url:'/xxx',
    method: 'get',
    body: '',    //请求体，method为get可以为空
    headers: {   //请求头
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
})
window.ajax = function(options) {
 return new Promise((resolve, reject) => {
  let {url, method, body, headers} = options
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  
  for(key in headers) {
    let value = headers[key]
    xhr.setRequestHeader(key, value)
  }

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve.call(undefined, xhr.responseText)
      } else if(xhr.status >= 400) {
        reject.call(undefined, 'error')
      }
    }
  }
  xhr.send(body)
 })
}
