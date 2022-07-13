//9totalPhoneBill
function  totalPhoneBill(callList){
    // var myArray = []
     var counter = 0
    var counter2 = 0
     
     var newList = callList.split(",")
   
     for(var i=0;i<newList.length;i++){
     let calls = newList[i].trim();
     if (calls.startsWith("call")){
      counter ++
    
     }else if(calls.startsWith("sms")){
         counter2 ++   
      }
     }
    
      var totalCalls = counter * 2.75        
    var totalSms = counter2 * 0.65
   
    var allCallsTotal = (totalCalls + totalSms)
   return "R" + allCallsTotal.toFixed(2)
     
   }        
  
  