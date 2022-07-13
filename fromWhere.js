// FromWhere

function FromWhere(regNo,regEnd){
    //return regNo.startsWith(regEnd)
    if (regNo.startsWith(regEnd)){
        return true
    }else{
    return false
    }
    
    }
    console.log(FromWhere('CJ 98912', 'CJ'));
    
    console.log(FromWhere('CY 874324', 'CA'))
  