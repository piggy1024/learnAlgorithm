function isSqueeze(str, targetStr) {
    // let p1 = 0;
    let p2 = 0;
    if (targetStr.length === 0) return true
    if (str.length < targetStr.length) return true
    for(let i = 0; i < str.length; i++) {
        if (str[i] === targetStr[p2]) {
            p2++
        }
        if (p2 >= targetStr.length) return true
    }
    return false

}

// console.log(isSqueeze('', '')); // true
// console.log(isSqueeze('', 'abc')); // true
// console.log(isSqueeze('addbc', 'abc')); // true
// console.log(isSqueeze('adddc', 'abc')); // false


function isSqueezeDia(str, targetStr) {
    if (targetStr.length === 0) return true
    if (str.length < targetStr.length) return true
    let dp = []
    let m = str.length
    let n = targetStr.length
    for(let o = 0; o < m+1; o++) {
        dp[o] = []
    }
    for(let i = 0; i < 26; i++) {
        dp[m][i] = m
    }
    for(let x = 0; x < m; x++){
        for(let y = 0; y < 26; y++) {
            dp[x][y] = 0
        }
    }
    // console.log(dp);
    // console.log('m', m);
    for(let j = m-1; j >= 0; j--) {
        for(let k = 25; k >= 0; k--) {
            // console.log('targetStr[j]',str[j]);
            if (String.fromCharCode(65+k).toLocaleLowerCase() !== str[j]) {
                dp[j][k] = dp[j+1][k]
            } else {
                dp[j][k] = j
            }
        }
    }
    // console.log(dp);
    // let nedDp = dp[0]
    // console.log(nedDp);
    let point = (targetStr[0].toLocaleLowerCase().charCodeAt(0) - 96)-1
    for (let l = 0; l < n; l++) {
        point = dp[point][(targetStr[l].toLocaleLowerCase().charCodeAt(0) - 96)-1]
    }
    // console.log(point, m+1);
    if (point < m) return true
    return false
}
// 'a'.toLocaleLowerCase().charCodeAt(0) - 96 // 0
// String.fromCharCode(65).toLocaleLowerCase();  // a
// console.log(isSqueezeDia('', '')); // true
// console.log(isSqueezeDia('', 'abc')); // true
// console.log(isSqueezeDia('addbc', 'abc')); // true
// console.log(isSqueezeDia('aazbdz', 'abc')); // false
// console.log(isSqueezeDia('ahbgdc', 'axc')); // false
// console.log(isSqueezeDia('aaaaaa', 'bbaaaa')); // false

var isSubsequence = function(s, t) {
    if (s.length === 0) return true
    if (s.length > 0 && t.length === 0) return false
    if (t.length < s.length) return true
    let dp = []
    let m = t.length
    let n = s.length
    for(let o = 0; o < m+1; o++) {
        dp[o] = []
    }
    for(let i = 0; i < 26; i++) {
        dp[m][i] = m
    }
    for(let x = 0; x < m; x++){
        for(let y = 0; y < 26; y++) {
            dp[x][y] = 0
        }
    }
    // console.log(dp);
    // console.log('m', m);
    for(let j = m-1; j >= 0; j--) {
        for(let k = 25; k >= 0; k--) {
            // console.log('targetStr[j]',str[j]);
            if (String.fromCharCode(65+k).toLocaleLowerCase() !== t[j]) {
                dp[j][k] = dp[j+1][k]
            } else {
                dp[j][k] = j
            }
        }
    }
    console.log(dp);
    // let nedDp = dp[0]
    // console.log(nedDp);
    let point = (s[0].toLocaleLowerCase().charCodeAt(0) - 96)-1
    for (let l = 0; l < n; l++) {
        console.log('point', point);
        point = dp[point][(s[l].toLocaleLowerCase().charCodeAt(0) - 96)-1]
        console.log('point1', point);
    }
    // console.log(point, m+1);
    // console.log((s[0].toLocaleLowerCase().charCodeAt(0) - 96)-1);
    if (point < m) return true
    return false
};
console.log('----------------------');
console.log('----------------------');
// console.log(isSubsequence('aaaaaa', 'bbaaaa')); // false
console.log(isSubsequence('ddabc', 'bbaaaa')); // false