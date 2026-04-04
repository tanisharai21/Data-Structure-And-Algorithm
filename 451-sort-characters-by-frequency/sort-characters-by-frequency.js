/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    //create bucket array
    let bucket = [];
    //fill the bucket
    for(let char in freqMap){
        const freq = freqMap[char];
        if(!bucket[freq]){
            bucket[freq] = [];
        }
        bucket[freq].push(char);
    }
    //build result string
    let result = "";
    for(let i=bucket.length-1;i>0;i--){
        if(bucket[i]){
            for(let char of bucket[i]){
                result += char.repeat(i);
            }
        }
    }
    return result;
};