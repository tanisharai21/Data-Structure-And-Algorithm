/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let count = 0; //to store the number of valid substrings
    let vowel = new Set(['a','e','i','o','u']) //helps to check the vowel
    //this loop picks the starting index 
    for(let i=0;i<word.length;i++){
        let seen = new Set(); //keeps the track of vowels found in current substring
        //this loops is for substring
        for(let j=i;j<word.length;j++){
            if(!vowel.has(word[j])){ //if the current character is not vowel then break
                break;
            }
            seen.add(word[j]); //add current vowel to the set
            if(seen.size === 5){
                count++;
            }
        }
    }
    return count;
};