const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MPromise(fn){
  let self = this;
  self.state = PENDING
  self.value = null
  self.reson = null
  function resolve(value) {
    if(self.state === PENDING) {
      self.state = FULFILLED
      self.value = value
    }
  }

  function reject(reason) {
    if(self.state === PENDING) {
      self.state = REJECTED
      self.reson = reason
    }
  }

  fn(resolve, reject)
  return {
    then: function(onFuifilled, onRejected) {
      if (self.state === FULFILLED) {
        onFuifilled(self.value);
      }
      if (self.state === REJECTED) {
        onRejected(self.reason);
      }
    }
  }
}

var promise = new MPromise((x,y) =>{
  setTimeout(() => {
    x(101)
  }, 3000)
})
promise.then((z)=>{
  console.log(z)  // 101
})