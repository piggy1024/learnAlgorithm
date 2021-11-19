function romanNumberToNumber(ramanString) {
    const romanInterTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const romanStringArray = ramanString.trim().split('')
    let sum = 0
    // 处理除最后一位数之前是所有数字
    for(let i = 0; i < romanStringArray.length -1; i++) {
        // 判断后一位数字如果比前一位数字大的话，前面一位数的值是取负值的，如 IV = -1 + 5, IX = -1 + 10
        if (romanInterTable[romanStringArray[i]] < romanInterTable[romanStringArray[i+1]]) {
            sum += -romanInterTable[romanStringArray[i]]
        } else {
            sum += romanInterTable[romanStringArray[i]]
        }
    }
    // 处理最后一位数
    sum +=  romanInterTable[romanStringArray[romanStringArray.length-1]]
    if (isNaN(sum)) {
        console.log('输入的罗马数字有误！')
    } else {
        console.log('转换后的数值为：', sum)
    }
}

romanNumberToNumber(' MCMXCIVA ')