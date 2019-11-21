function diagonalDifference(arr) {
    // Initialize sums of diagonals 
        var d1 = 0, d2 = 0; 
       
        for (var i = 0; i < arr.length; i++) 
        { 
            for (var j = 0; j < arr.length; j++) 
            { 
                // finding sum of primary diagonal 
                if (i == j) 
                    d1 += arr[i][j]; 
       
                // finding sum of secondary diagonal 
                if (i == arr.length - j - 1) 
                    d2 += arr[i][j]; 
            } 
        } 
       
        // Absolute difference of the sums 
        // across the diagonals 
        return Math.abs(d1 - d2);
}
