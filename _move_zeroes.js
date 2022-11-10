/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let j=0;
    let count =0;

    for(let i of nums){
        console.log(i)
        if(i!=0){
            nums[j]=i;
            j=j+1;

        }
        else{
            count++;
        }
    }
    // console.log(nums)
    
    while(count>0){
        nums[j]=0;
        j++;
        count--;
    }
    
};

//https://leetcode.com/problems/move-zeroes/solutions/2733623/there-are-6-approaches-best-time-and-space-complexity/
