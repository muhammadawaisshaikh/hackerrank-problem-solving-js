// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos =0;
    let neg =0;
    let zer =0;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==0){zer++;}
        if(arr[i]>0){pos++;}
        if(arr[i]<0){neg++;}
    }

    console.log(pos/arr.length);
    console.log(neg/arr.length);
    console.log(zer/arr.length);

}
