/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let nextMap = {}; // stores next greater of each element in nums2

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        let curr = nums2[i];

        // Pop smaller or equal elements
        while (stack.length > 0 && stack[stack.length - 1] <= curr) {
            stack.pop();
        }

        // If stack is not empty → top is next greater
        nextMap[curr] = stack.length > 0 ? stack[stack.length - 1] : -1;

        // Push current element
        stack.push(curr);
    }

    // Build result for nums1 using hashmap
    let res = [];
    for (let x of nums1) {
        res.push(nextMap[x]);
    }

    return res;
};