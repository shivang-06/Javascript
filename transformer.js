function doubleIt(num){
    return 2*num
}


function transformer(arr,cb){
  var narr=[];
  for(var i=0;i<arr.length;i++){
      narr[i] = cb(arr[i])
  }
  console.log("New Array is :")
  return(narr)
}

var arr= [1,2,3,4,5,6]
var newArr = transformer(arr, doubleIt);
console.log(newArr)