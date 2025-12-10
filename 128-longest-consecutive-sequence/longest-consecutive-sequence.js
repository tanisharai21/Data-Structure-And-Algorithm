/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let st = new Set();
    let res = 0;
    for(let num of nums){
        st.add(num);
    }
    for(let num of nums){
        if(st.has(num) && !st.has(num-1)){
            let cur = num,cnt = 0;
            while(st.has(cur)){
                st.delete(cur);
                cur++;
                cnt++
            }
            res = Math.max(res,cnt);
        }
    }
    return res;
};