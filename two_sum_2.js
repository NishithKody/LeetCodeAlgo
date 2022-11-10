/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let map = new Map();
    let res = [];
    for(let i=0 ;i< numbers.length; i++){
        if(map.has(numbers[i])){
            console.log('map has ',target-numbers[i])
            res.push(map.get(numbers[i])+1)
            res.push(i+1)
        }
        else{
            // console.log(target-numbers[i], target, numbers[i])
            map.set(target-numbers[i], i)
        }
        // console.log(map)

    }
    return res
};
