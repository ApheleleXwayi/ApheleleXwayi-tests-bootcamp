// findItemsOver20
function  findItemsOver20(list){
  var over20qty =  list.filter((item)=>{
  if(item.qty > 20 ){
    return item
  }
  })
  return over20qty
  }