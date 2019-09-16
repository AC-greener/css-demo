
var myDB = {
  name: 'zhangsan',
  age: 18,
  db: null
}
//打开indexDB
const req = window.indexedDB.open(myDB.name)
req.onsuccess = function(e) {
  myDB.db = e.target.result
  console.log(myDB.db)
}
req.onerror = function(err) {
  console.log('打开失败')
}

