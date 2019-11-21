// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    for(var i =0; i<3; i++) {
        if(a[i] > b[i]) {
            alice++;
        }
        else if(a[i] == b[i]) {
            // no one scores
        }
        else if(a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}
