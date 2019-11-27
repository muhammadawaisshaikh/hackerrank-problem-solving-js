// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let max = ar[0];
    let count = 0;

    for (let i = 1; i < ar.length; ++i) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }

    ar.forEach(element =>{
        if(element == max) {
            count++;
        }
    });
    return count;
}
