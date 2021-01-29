/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const arr = [];
function Serialize(pRoot)
{
    // write code here
    if(!pRoot)
        arr.push('$');
    else {
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
}
function Deserialize(s)
{
    // write code here
    let node = null;
    if(arr.length < 1) {
        return null;
    }
    const number = arr.shift();
    if(typeof number === 'number') {
        node = new TreeNode(number);
        node.left = Deserialize();
        node.right = Deserialize();
    }
    return node;
}