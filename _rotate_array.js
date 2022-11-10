/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    if( nums.length == k)
        return nums

    n = nums.length-1;
        
    k = k%nums.length;
    rev(nums, 0 ,n)
    rev(nums, 0, k-1)
    rev(nums, k, n)

    
};

let rev  = (arr, i,j) =>{
    while(i<j){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++;
        j--;
    }
}

//-----------------------------------
The idea is to reverse the given list, and then reverse elements in the range 0..k and in the range k..L. For example nums = [1,2,3,4,5,6,7], k = 3:

    Reverse: nums = [7,6,5,4,3,2,1]
    Reverse in the range 0..k: nums = [5,6,7,4,3,2,1]
    Reverse in the range k..L: nums = [5,6,7,1,2,3,4]

Notice that k can be greater than L (length of the nums) because k is number of rotattion steps. If k is equal to L, elements do full rotation and nums is not changed. So for this case we can recalculate k as k%L.

Time: O(n) - for reverse and swaps
Space: O(1) - in-place
https://leetcode.com/problems/rotate-array/solutions/1729973/python3-in-place-exaplained/
