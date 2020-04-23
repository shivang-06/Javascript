//Finding union of two arrays!
var arr1 = [1,2,3]
var arr2 = [100 , 2, 1, 10]
var union = []
for(var i=0;i<arr1.length;i++){
    union.push(arr1[i])
}
for(var j =0; j<arr2.length;j++){
    if(union.includes(arr2[j])){
        continue
    }
    else{
        union.push(arr2[j])
    }
}
console.log(union)