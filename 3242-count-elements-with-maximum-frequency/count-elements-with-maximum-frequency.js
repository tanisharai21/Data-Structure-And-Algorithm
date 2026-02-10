/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();

    //count frequency
    for(let num of nums){
        map.set(num, (map.get(num) || 0)+1);
    }
    //find max frequency
    let maxFrequency = 0;
    for(let freq of map.values()){
        maxFrequency = Math.max(freq, maxFrequency);
    }
    //count elements with max freq
    let result = 0;
    for(let freq of map.values()){
        if(freq == maxFrequency){
            result += freq;
        }
    }
    return result;
};