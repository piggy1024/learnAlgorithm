// 状态定义： dp[i] 表示targetArray[i]结尾的连续子数组的和
function BiggestSum(targetArray) {
    if (targetArray.length === 0) return 0

    let dp = []
    // dp[i]  以targetArray[i]结尾当前最大连续字段和

    // 数组只有一个时,最大连续子数组的和即为dp[0]
    dp[0] = targetArray[0]

    // res储存当前 以targetArray[i]结尾当前最大连续子数组的和
    let res = dp[0]
    for(let i = 1; i < targetArray.length; i++) {
        // 若 dp[i-1] <=0 则 dp[i] = dp[i-1] + targetArray[i] 不是最大的, 最大为dp[i] =  targetArray[i]
        // 若 dp[i-1] > 0 则 dp[i] = dp[i-1] + targetArray[i] 是最大的
        dp[i] = Math.max(dp[i-1] + targetArray[i], targetArray[i])

        // 对比dp[i] 是不是当前dp数组中最大的值
        res = Math.max(res, dp[i])
    }
    return res
}


// let testAarry = [ 1, -2, 3, -5, 6, 7]
let testAarry = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(BiggestSum(testAarry));