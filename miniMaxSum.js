// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let arr1 = [];
    let sorted = [];
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum = 0;
       for(let j=0; j<arr.length; j++) {
           if(arr[i] != arr[j]) {
               sum = sum+arr[j];
           }
        }
        arr1.push(sum); 
    }
    sorted = arr1.sort();
    console.log(sorted[0]+' '+sorted[arr1.length-1]);
}
