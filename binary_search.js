/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        
    let start =0;
    let end = nums.length-1;
    let middle;

    while(start<=end){
        middle = Math.floor((start + end)/2);
        console.log(middle)
        if(nums[middle]==target){
            return middle
        }
        else if(target<nums[middle]){
            end=middle-1;
        }
        else{
            start=middle+1
        }
    }

    return -1;

    
};
