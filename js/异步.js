function x() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 3000)
  })
}

async function test() {
  try {
    let n = await Promise.all([x(), x()])
    console.log(n)
  } catch(err) {
    console.log(err)
  }
 
  console.log('hello world')
}
test()
//async会返回一个promise