// 在排序数组中统计一个数字出现的次数


// 二分法

// 找最左侧位置
function firstLeftPosition(target, sortedArray) {
    let left = 0
    let right = sortedArray.length - 1
    // let middle = (right - left) / 2

    while (left < right) {
        // 防止整数溢出问题
        let middle = Math.ceil(left + (right - left) / 2)

        if (sortedArray[middle] < target) {
            left = middle + 1
        } else {
            right = middle
        }

    }
    //  有可能数组不存在该数字 因此最后要判断是不是和目标元素相等
    if (sortedArray[left] === target) {
        return left
    }
    return -1
}

// 找右边
function firstRightPosition(target, sortedArray) {
    let left = 0
    let right = sortedArray.length - 1
    // let middle = (right - left) / 2


    while (left < right) {
        // 防止整数溢出问题
        // let middle = left + (right - left) / 2
        // +1 是向上取整
        let middle = Math.ceil(left + (right - left) / 2)

        if (sortedArray[middle] <= target) {
            left = middle
        } else if (sortedArray[middle] > target) {
            right = middle - 1
        }

    }
    return left
}

function count(target, sortedArray) {
    let len = sortedArray.length

    if (len === 0) return 0

    let leftPosition = firstLeftPosition(target, sortedArray)
    if (leftPosition === -1) return 0
    let rightPosition = firstRightPosition(target, sortedArray)

    return rightPosition - leftPosition + 1
}

// console.log(firstLeftPosition(4, [1, 2, 4]), firstRightPosition(4, [1, 2, 4]));
console.log(count(8, [7, 8, 8, 8]));