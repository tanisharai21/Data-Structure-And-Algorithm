/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let count = 0;
    const vowel = new Set(['a','e','i','o','u']);
    for(let i=0;i<word.length;i++){
        let seen = new Set();
        for(let j=i;j<word.length;j++){
        //check consonents
        if(!vowel.has(word[j])){
            break;
        }
        seen.add(word[j]);
        if(seen.size===5){
            count++;
        }
        }
    }
    return count;
};