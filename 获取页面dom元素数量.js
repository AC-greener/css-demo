function countNodes(node) {
  //  计算自身
  var count = 1;
  //  判断是否存在子节点
  if(node.hasChildNodes()) {
      //  获取全部的子节点
      var cnodes = node.childNodes;  
      //  对子节点进行递归统计
      for(var i=0; i<cnodes.length; i++) {
        if(cnodes.item(i).nodeType === 1) {
          count = count + countNodes(cnodes.item(i))
        }
      }
  }
  return count;
}
//  统计body的节点数量
countNodes(document.body)
