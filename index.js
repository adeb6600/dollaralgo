// Given an array of unsorted positive integers, write a function that finds runs of 3 consecutive numbers
//  (ascending or descending) and returns the indices where such runs begin. If no such runs are found, return null. 

// Example: findConsecutiveRuns([1,2,3,5,10,9,8,9,10,11,7]) would return [0,4,6,7] 

const findConsecutiveRuns = (arr)=>{
   let runsIndices= []
    let firstDiff,secondDiff;
    for(i=0, len=arr.length;i<len-2; i++){
        firstDiff = arr[i] - arr[i+1];
        secondDiff = arr[i+1] - arr[i+2]
        if(Math.abs(firstDiff)===1 && firstDiff===secondDiff){
            runsIndices.push(i)
        }
  }

  return runsIndices.length>0? runsIndices : null

}
var arr = [ 1, 2, 3, 4, 5, 9, 8, 7, 10, 11, 12 ];
var result = findConsecutiveRuns(arr)
console.log('runs check', result)