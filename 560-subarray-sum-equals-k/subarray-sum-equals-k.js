/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixSum = new Map();
    let result = 0;
    let currSum = 0;
    for(let num of nums){
        currSum += num;
        if(currSum === k){
            result++;
        }
        if(prefixSum.has(currSum - k)){
            result += prefixSum.get(currSum - k);
        }
        prefixSum.set(currSum, (prefixSum.get(currSum) || 0)+1);
    }
    return result;
};