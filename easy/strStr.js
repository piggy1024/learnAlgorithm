function getNext(str) {
    const nextList = []
    nextList[0] = -1
    let i = 0
    let j = -1
    while(i < str.length) {
        if (j === -1 || str[i] === str[j]) {
            i++
            j++
            nextList[i] = j
        } else {
            j = nextList[j]
        }
    }
    return nextList
}


function KMP(str, str1, nextList) {
    let i = 0, j = 0
    while(i < str.length  && j < str1.length) {
        if (j === -1 || str[i] === str1[j]) {
            i += 1
            j += 1
        } else {
            j = nextList[j]
        }
    }
    if (j === str1.length) {
        return i - j
    } else {
        return -1
    }
}
let haystack = 'hello'
let needle = 'll'
let haystack1 = 'aaaaa'
let needle1 = 'bba'
console.log(getNext(needle));
console.log(getNext(needle1));
console.log(KMP(haystack, needle, getNext(needle)))
console.log(KMP(haystack1, needle1, getNext(needle1)))