const mergeArrays = (arr1, arr2) => {
    var merged = [];
    var i = 0,
        j = 0;

    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    if (i <= (arr1.length - 1)) {
        arr1.splice(0, i)
        merged = merged.concat(arr1);
    } else if (j <= (arr2.length - 1)) {
        arr2.splice(0, j)
        merged = merged.concat(arr2)

    }

    return merged;
}

console.log(mergeArrays([1,3,4,5], [2,6,7,8]))
