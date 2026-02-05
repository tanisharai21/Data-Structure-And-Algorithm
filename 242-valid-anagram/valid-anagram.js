/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = new Map();
    //count character of s
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0)+1);
    }
    //decrease count
    for(let ch of t){
        if(!map.has(ch)) return false;
        map.set(ch, map.get(ch)-1);
        if(map.get(ch)<0) return false;
    }
    return true;
};