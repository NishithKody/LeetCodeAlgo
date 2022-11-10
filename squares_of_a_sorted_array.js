/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = []
    for(let i of nums){
        res.push(i*i);
    }
    res.sort(sorter);
    return res;
};

let sorter = (a,b)=>{
    return a-b;
}
