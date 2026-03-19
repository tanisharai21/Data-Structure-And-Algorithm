/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    function rotateArray(arr, start, end){
        while(start<end){
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++;
            end--;
        }
    }
    k %= nums.length;
    rotateArray(nums, 0, (nums.length-1));
    rotateArray(nums, 0, (k-1));
    rotateArray(nums, k, (nums.length-1));
    return nums;
};