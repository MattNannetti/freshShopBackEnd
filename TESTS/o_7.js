let test = [ 17432, 39910, 12343, 57333, 6898, 516, 49898, 11323, 12373, 36736, 26339, 14621, 17945, 13103, 24866, 40618, 15016, 44898, 42501, 50896, 57660, 14158, 14033, 24085, 18537, 42091, 24131, 22703, 58357, 43941, 14347, 14057, 412, 16733, 26842, 49388, 32200, 13990, 31514, 18000, 26905, 63992, 12503, 13451, 26860, 9090, 17777, 13669, 6484, 58871, 62846, 25339, 26865, 12899, 12517, 22524, 33571, 26297, 55238, 12959, 30000, 62677, 52299, 13553, 25307, 42289, 24581, 14551, 13649, 21358, 13566, 25033, 46645, 50240, 24910, 52643, 31568, 42124, 25657, 28842, 21496, 16425, 12511, 43896, 18570, 54136, 1809, 43925, 12911, 23052, 25367, 6268, 14197, 14347, 58720, 39391, 33382, 19203, 15734, 53456, 60486, 23552, 38124, 4995, 31407, 26261, 5690, 42522, 12323, 10156, 48135, 14461, 54624, 26113, 13740, 6583, 12301, 27194, 14237, 63417, 3126, 43420, 53447, 15949, 39940, 42915, 56320, 30454, 12301, 15147, 14087, 13187, 6064, 39765, 25603, 56544, 14033, 6195, 25933, 13669, 25199, 14221 ];
function findPW (arr) {
    let primeNums = [];
    let primeNumsShifted = [];

    function test_prime(n){

        if (n===1)
        {
            return false;
        }
        else if(n === 2)
        {
            return true;
        }
        else{
            for(var x = 2; x < n; x++){
            if(n % x === 0){
                return false;
            }
            }
            return true;  
        }
    }

    for (i=0 ; i<arr.length ; i++){
        if (test_prime(arr[i])===true){
            primeNums.push(arr[i]);
        }
    }
    for (j=0; j<primeNums.length ; j++){
        //let a = 3.14 * ((primeNums[i]/2)*(primeNums[i]/2));
        let b = primeNums[j] >> 8;
        primeNumsShifted.push(b);
    }
    let finalResult = primeNumsShifted.join("");
    console.log(primeNumsShifted);
    return finalResult;
}


console.log(findPW(test));


//pi 161th decimal is 8 or 2 if you start at 3.s
//https://www.odoo.com/jobs/challenge/b2a/974/prime.json
//3a73521e2777f0b5b72b446bb0a760d0d9951037