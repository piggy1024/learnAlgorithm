function brackets(str) {
    let strArr = str.split('')
    let stack = []
    let bracketsMatch = new Map()
    bracketsMatch.set('{','}')
    bracketsMatch.set('[',']')
    bracketsMatch.set('(',')')
    bracketsMatch.set('}','{')
    bracketsMatch.set(']','[')
    bracketsMatch.set(')','(')
    if (str.length === 0) return true
    let flag = true
    for (let i=0; i < strArr.length; i++) {
        let tmp = bracketsMatch.get(strArr[i])
        if (strArr[i] === '(' || strArr[i] === '[' || strArr[i] === '{') {
            stack.push(strArr[i])
        } else {
            let x = stack.pop()
            if (x !== tmp) {
                flag = false
            }
        }
    }
    return flag && (stack.length === 0)
}


let str = ''
// let str = '([])'
// let str = '(])'
// let str = '([)'
console.log(brackets(str));