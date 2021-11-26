function magicIndex(targetArr) {
    for(let i=0; i < targetArr.length; i++) {
        if (targetArr[i] === i) return i
    }
    return -1
}
let testArr = [5,4,3,2,1]
// let testArr = [-1,1,2,2,4,5,5,4]
console.log(magicIndex(testArr));