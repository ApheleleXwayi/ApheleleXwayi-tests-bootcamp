// findItemsOver
function findItemsOver(list,threshold){
    var over20qty =  list.filter((item)=>{
   if(item.qty > threshold ){
     return item
   }
   })
   return over20qty
   }