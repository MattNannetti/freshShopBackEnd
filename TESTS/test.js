var idx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
let myArray = [36, 1, 5, 5, 1, 15, 12, 9, 4, 6, 36, 36, 8, 41, 1, 13, 14, 11, 6, 7]
let result = []
var tmp = ""
//for (var i=0; i < pwd.length; i++)
//    tmp += " "+idx.indexOf(pwd.charAt(i));


for (i=0; i<myArray.length ; i++){
    let x = myArray[i]
    let y = idx[x]
    result.push(y)
}
let finalResult = result.join('')


console.log(finalResult);