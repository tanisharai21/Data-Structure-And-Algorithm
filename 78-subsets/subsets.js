/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsetRecur(i,nums,res,subset){
        //base case
        if(i===nums.length){
            res.push([...subset]);
            return;
        }
        //include
        subset.push(nums[i]);
        subsetRecur(i+1,nums,res,subset);
        //exclude
        subset.pop();
        subsetRecur(i+1,nums,res,subset);
    }
var subsets = function(nums) {
        const subset = [];
        const res = [];
        subsetRecur(0,nums,res,subset);
        return res;
};