/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0; //position to place next zero
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        } 
    }
    //fill the remaining with zero
    while(index<nums.length){
        nums[index] = 0;
        index++;
    }
    return nums;
};