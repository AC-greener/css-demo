function all(iterable) {
  return new Promise((resolve, reject) => {
    let index = 0;
    for (const promise of iterable) {
      const currentIndex = index;
      promise.then(
        (value) => {
          if (anErrorOccurred) return;
          result[currentIndex] = value;
          elementCount++;
          if (elementCount === result.length) {
            resolve(result);
          }
        },
        (err) => {
          if (anErrorOccurred) return;
          anErrorOccurred = true;
          reject(err);
        });
      index++;
    }
    if (index === 0) {
      resolve([]);
      return;
    }
    let elementCount = 0;
    let anErrorOccurred = false;
    const result = new Array(index);
  });
}
function all(array) {
  return new Promise((resolve, reject) => {
    let length = array.length
    if(length === 0) {
      resolve([])
      return
    }
    let result = []
    let count = 0, i = 0
    for(let promise of array) {
      promise.then((value) => {   //这里的then是异步的， 不能用result.push(value)
        result[i] = value
        count++
        if(count === length) {
          resolve(result)
          return 
        }
      }, (error) => {
        reject(error)
        return
      })
    }
  })
}
function race(array) {
  return new Promise((resolve, reject) => {
    for(let promise of array) {
        promise.then(value => {
          resolve(value)
          return
        }, (error) => {
          reject(error)
          return
        })
    }
  })
}
