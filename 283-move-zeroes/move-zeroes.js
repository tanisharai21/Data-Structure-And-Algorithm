/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index=0;
    //traverse in array to find non zero 
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[index] = nums[i];
            index++;
        }
    }
    //make all last elements zero
    while(index<nums.length){
        nums[index] = 0;
        index++;
    }
    return nums;
};