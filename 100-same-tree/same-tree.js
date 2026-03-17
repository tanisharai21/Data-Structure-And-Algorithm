/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //base cases
    if(!p && !q) return true; //if both are null
    if(!p || !q) return false; //if one of them is null

    //recursive case
    return(
        p.val === q.val && //check values are same or not
        isSameTree(p.left,q.left) &&
        isSameTree(p.right,q.right)
    );
};