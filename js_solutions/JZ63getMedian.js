// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
// 那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
// 那么中位数就是所有数值排序之后中间两个数的平均值

const arr = []
function Insert(num)
{
    // write code here
    let i = arr.length - 1
    for(; i >= 0; i--) {
        if(arr[i] > num) {
            arr[i+1] = arr[i];
        } else {
            break;
        }
    }
    arr[i+1] =num;
}
function GetMedian(){
	// write code here
    if(arr.length % 2 == 0) {
        const mid = arr.length/2;
        return (arr[mid-1] + arr[mid])/2;
    } else {
        return arr[Math.floor(arr.length/2)]
    }
}

// java solution  + priotityQueue
public int[] medianII(int[] nums) {
    // write your code here
    if(nums == null) {
        return null;
    }
    int[] res = new int[nums.length];
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>(new Comparator<Integer>(){
        public int compare(Integer a, Integer b) {
            return b - a;
        }
    });
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    int index = 0;
    for(int i = 0; i < nums.length; i++) {
        int temp = nums[i];
        maxHeap.offer(temp);
        if(maxHeap.size() > minHeap.size() + 1) {
            minHeap.offer(maxHeap.poll());
        }
        else if(i >= 2 && maxHeap.peek() > minHeap.peek()) {
            minHeap.offer(maxHeap.poll());
            maxHeap.offer(minHeap.poll());
        }
        
        res[index++] = maxHeap.peek();
        
    }
    return res;
    
}