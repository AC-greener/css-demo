let Single = (function() {
  let _instance = null
  function init(props) {
    return {
      publickMethod: function(){

      },
      value: props.value
    }
  }
  return function(props) {
    if(!_instance) {
      _instance = init(props)
    }
    return _instance
  }
})()
let instance = Single({value: 10})
console.log(instance)