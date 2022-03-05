let nums = [2,7,11,15,5,4];
let target = 9;


//Method1
function check(array,target) {
    let result=[]
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==target){
                result.push([array[i],array[j]])
            }
        }
    }
        console.log(result);
}
  check(nums,target);

  //Method2
function check2(array,target){
    let result=[];
    let newArray = [];
    for(let i=0;i<array.length;i++){
        let number= target-array[i];
        if(newArray.find((element)=>element==number)){
            result.push([number,array[i]])
        }
        newArray.push(array[i]);

    }
    console.log(result);
    
}
    check2(nums,target)