function isSqueeze(str, targetStr) {
    // let p1 = 0;
    let p2 = 0;
    if (targetStr.length === 0) return false
    if (str.length < targetStr.length) return false
    for(let i = 0; i < str.length; i++) {
        if (str[i] === targetStr[p2]) {
            p2++
        }
        if (p2 >= targetStr.length) return true
    }
    return false

}

console.log(isSqueeze('', '')); // true
console.log(isSqueeze('', 'abc')); // true
console.log(isSqueeze('addbc', 'abc')); // true
console.log(isSqueeze('adddc', 'abc')); // false