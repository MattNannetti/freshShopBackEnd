/*

r = function(pwd, fr, to, by) {
    return _.map(
      _.range(fr, to, by), function(i) { return pwd[i] }
    ).join('');
}
print = console.log

>>> print(r(pwd, 0, 4, 1))
a459
>>> print(r(pwd, 4, 20, 2))
44af731e
>>> print(r(pwd, 5, 30, 3))
da93dc958
>>> print(r(pwd, 5, 40, 4))
dacd6e888
>>> print(r(pwd, 6, 40, 6))
47ebf6
>>> print(r(pwd, 7, 8, 1))
0
>>> print(r(pwd, 10, 40, 3))
fc1e9e6478
>>> print(r(pwd, 10, 40, 5))
f1cef4
>>> print(r(pwd, 15, 40, 6))
16d8d
>>> print(r(pwd, 20, 40, 3))
c958b4a

*/


let myArray = [];
for (i=0 ; i<40 ; i++){
    myArray.push(i);
}

function sortPWD (pwd, from, to, by) {
    let arr = Array.from(pwd);
    for (i=0 ; i<arr.length ; i++){
        myArray.splice(from, 1, arr[i]);
        from+=by;
    }
    return myArray;
}

console.log(sortPWD('924f', 0, 4, 1));
console.log(sortPWD('1054f3ba', 4, 20, 2));
console.log(sortPWD('a54363d46', 5, 30, 3));
console.log(sortPWD('af16bb6f0', 5, 40, 4));
console.log(sortPWD('0fa389', 6, 40, 6));
console.log(sortPWD('d', 7, 8, 1));
console.log(sortPWD('41b69b0fa0', 10, 40, 3));
console.log(sortPWD('4f3b81', 10, 40, 5));
console.log(sortPWD('fb3f5', 15, 40, 6));
console.log(sortPWD('3d4691c', 20, 40, 3));

let finalResult = myArray.join('');

console.log(finalResult);


/*
>>> print(r(pwd, 0, 4, 1))
924f
>>> print(r(pwd, 4, 20, 2))
1054f3ba
>>> print(r(pwd, 5, 30, 3))
a54363d46
>>> print(r(pwd, 5, 40, 4))
af16bb6f0
>>> print(r(pwd, 6, 40, 6))
0fa389
>>> print(r(pwd, 7, 8, 1))
d
>>> print(r(pwd, 10, 40, 3))
41b69b0fa0
>>> print(r(pwd, 10, 40, 5))
4f3b81
>>> print(r(pwd, 15, 40, 6))
fb3f5
>>> print(r(pwd, 20, 40, 3))
3d4691c

*/

