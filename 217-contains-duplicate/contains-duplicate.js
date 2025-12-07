/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const n = nums.length;
    const st = new Set();
    for(let i=0;i<n;i++){
        if(st.has(nums[i]))
            return true;
        else
            st.add(nums[i]);
    }
    return false;
};