
//虚拟元素的类
class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

//设置属性
function setAttr(node, key, value) {
  switch(key) {
    case 'value':
      if(node.tagName === 'INPUT') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
    break;
    case 'style':
      node.style.cssText = value
    default:
      node.setAttribute(key, value)
    break;
  }
}
//将虚拟节点渲染成html、
function render(eleObj) {
  let el = document.createElement(eleObj.type)
  for(key in eleObj.props) {
    setAttr(el, key, eleObj.props[key])
  } 

  //遍历儿子，继续渲染
  eleObj.children.forEach(item => {  
    item = (item instanceof Element) ? render(item) : document.createTextNode(item)
    el.appendChild(item)
  })
  return el
}

function createElement(type, props, children) {
  return new Element(type, props, children)
}


let VertualDom = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['a']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('li', {class: 'item'}, ['c'])
])

let el = render(VertualDom)

document.body.appendChild(el)
// console.log(VertualDom)
console.log(el)
