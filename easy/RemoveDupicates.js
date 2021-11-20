// 空间复杂度为（0）的解法
function RemoveArrayDuplicates(targetArr) {
    // 长度为1或者0直接返回
    if (targetArr.length === 1 || targetArr.length === 0) return targetArr
    let x = 1
    for(let i=1; i < targetArr.length; i++) {
        if (targetArr[i-1] !== targetArr[i]) {
            targetArr[x] = targetArr[i]
            x++
        }
    }
    
    if( x > 1) targetArr.splice(x)
    return targetArr
}

// let testAarry = []
// let testAarry = [1]
let testAarry = [ 1, 1, 2]
// let testAarry = [ 1, 1, 1, 4, 4, 5, 6, 6, 7, 8, 8]
console.log(RemoveArrayDuplicates(testAarry));