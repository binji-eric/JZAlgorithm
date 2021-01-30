// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则返回true,否则返回false。
// 假设输入的数组的任意两个数字都互不相同。

// 递归版
function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    return judge(sequence, 0, sequence.length - 1);
  }
  function judge(a, l, r) {
    // 只有小于一个节点，return true
    if (l >= r) return true;
    let i = r;
    while (a[i] >= a[r] && i >= l) 
      i--;
    // 从i开始到l，应该为左子树，均小于根节点a[r]才行
    for (let j = i - 1; j >= l; j--) {
      if (a[j] > a[r]) return false;
    }
    // 递归评估左子树、右子树
    return judge(a, l, i) && judge(a, i+1, r - 1);
  }