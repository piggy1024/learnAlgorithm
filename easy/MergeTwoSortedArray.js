function mergeTwoArray(arr1, arr2) {
    let p1 = 0, p2 = 0
    let len1 = arr1.length
    let len2 = arr2.length
    const tmpMergeArray = []

    // for(let i = 0; i < (len1 > len2 ? len1 : len2); i++) {
    //     console.log(arr1[p1], arr2[p2]);
    //     if (arr1[p1] <= arr2[p2]) {
    //         tmpMergeArray.push(arr1[p1])
    //         p1++
    //     } else {
    //         tmpMergeArray.push(arr2[p2])
    //         p2++
    //     }
    // }

    while(p1 < len1+1 && p2 < len2+1) {
        console.log(arr1[p1], arr2[p2]);
        if (arr1[p1] <= arr2[p2]) {
            tmpMergeArray.push(arr1[p1])
            p1++
        } else {
            tmpMergeArray.push(arr2[p2])
            p2++
        }
    }
    return tmpMergeArray

}

console.log(mergeTwoArray([1,2,3], [2,5,6]));