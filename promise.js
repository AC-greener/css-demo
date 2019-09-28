const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise{
    constructor(excutor) {
      this.status = PENDING
      this.value = undefined
      this.reason = undefined
      this.resolveCallBacks = []
      this.rejectCallBacks = []
      let resolve = function(data) {
        if(this.status === PENDING) {
          this.status = FULFILLED
          this.value = data
          this.resolveCallBacks.forEach(callback => callback())
        }
      }
      let reject = function(error) {
        if(this.status === PENDING) {
          this.status = REJECTED
          this.reason = error
          this.rejectCallBacks.forEach(callback => callback())
        }
      }
      try {
        excutor(resolve, reject)
      } catch(error) {
        reject(error)
      }
    }
    then(onFulfilled, onRejected) {
      if(this.status === FULFILLED) {
        onFulfilled(this.value)
      }
      if(this.status === REJECTED) {
        onRejected(this.reason)
      }
      if(this.status === PENDING) {
        this.resolveCallBacks.push(onFulfilled)
        this.rejectCallBacks.push(onRejected)
      }
    }
}

var p = new MyPromise((resolve, reject) => {

})
p.then((data) => {
  console.log(data)
}, (error) => {
  console.log(error)
})