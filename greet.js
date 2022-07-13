
1// greet
function greet(name){
  var results = 'Hello, ' + name
  return results
  }
/* isFromBellville 

function isFromBellville (input){
return input.startsWith('CY')

}
console.log(console.log(isFromBellville('CJ 123')))


3// regCheck
 
function isFromCapeTown(input){
  return input.startsWith("CA")
  }
  console.log(isFromCapeTown("CA 123 908"))

  4//  countRegNumber
   function countRegNumber(regNo){
    var array = regNo.split(',');
     return array.length;
   console.log(array);
   
   }
  
   console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'))
  // 5isWeekday
   function isWeekday(input){
    if(input.startsWith('S')){
       return false
       
       }
    
    else{
       return true
       
       }
    }
    // 6yearsAgo
    function yearsAgo(year){

   
      const yearAgo = new Date(year) 
         
   
      return yearAgo
   }
   console.log((new Date().getFullYear() - 2000), yearsAgo(2000));
   console.log((new Date().getFullYear() - 1976), yearsAgo(1976))
  //  7countAllPaarl
  function allPaarl(values){
var myArray = []
var regList = values.split(", ")

for (var i=o;i<regList.length;i++);
 var eachReg = regList [i]
 if (eachReg.startsWith(CJ));{
myArray.push(eachReg)
 }
 return myArray
}

// FromWhere

  function isFrom(regNo,regEnd){
    //return regNo.startsWith(regEnd)
    if (regNo.startsWith(regEnd)){
        return true
    }else{
    return false
    }
    
    }
    
    console.log(isFrom('CJ 98912', 'CJ'));
    
    console.log(isFrom('CY 874324', 'CA'))
  
 
  // transportFee

 function  transportFee(shifts){
 
  if(shifts === "mornning" ){
  
    return "R" + 20
    }
    if (shifts === "afternoon"){
        
      return "R" + 10 
    }
    
    if(shifts === "nightshift"){
       return 'free'
       }
  }
  
  
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



// findItemsOver20
function  findItemsOver20(list){
  var over20qty =  list.filter((item)=>{
  if(item.qty > 20 ){
    return item
  }
  })
  return over20qty
  }
// findItemsOver
function findItemsOver(list,threshold){
  var over20qty =  list.filter((item)=>{
 if(item.qty > threshold ){
   return item
 }
 })
 return over20qty
 }
  
 
 
 
// mostProfitableDepartment
// This function finds the most profitable
function mostProfitableDepartment (salesData) {
  const grouped = salesData.reduce((group, data) => {
    const { department } = data;
    group[department] = group[department] ?? [];
    group[department].push(data);

    return group;
  }, {});

  const keys = Object.keys(grouped);

  let highestSales = 0;
  let mostProfitableDept = "";
  for (let i = 0; i < keys.length; i++) {
    const deptSales = grouped[keys[i]].reduce((a, b) => a + b.sales, 0);

    const findMostProfitable = () => {
      if (deptSales > highestSales) {
        highestSales = deptSales;
        mostProfitableDept = keys[i];
      }
    };
    findMostProfitable();
  }

  return mostProfitableDept;
};
// console.log(mostProfitableDepartment(salesData2));

// find most profitable day
function mostProfitableDay(salesData) {
  const grouped = salesData.reduce((group, data) => {
    const { day } = data;
    group[day] = group[day] ?? [];
    group[day].push(data);
    return group;
  }, {});

  const keys = Object.keys(grouped);
  let mostProfitableDay = "";
  let highestDailySale = 0;
  for (let i = 0; i < keys.length; i++) {
    const dailyTotal = grouped[keys[i]].reduce((a, b) => a + b.sales, 0);
    if (dailyTotal > highestDailySale) {
      highestDailySale = dailyTotal;
      mostProfitableDay = keys[i];
    }
  }
  return mostProfitableDay;
};*/
