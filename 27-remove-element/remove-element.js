/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //we will use two pointer to remove the specific elements
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};