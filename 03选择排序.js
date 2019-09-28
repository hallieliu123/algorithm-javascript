const { log } = console;
  
// 选择排序法:通过比较首先选出最小的数放在第一个位置上，然后在其余的数中选出次小数放在第二个位置上,依此类推,直到所有的数成为有序序列。
// 外层循环遍历所有元素
// 内层循环做比较
let arr = [112,23,4,5,2,67];
function select(arr){
    for(let i=0;i<arr.length;i++){  // 2,4,5,23,112,67
        let temp = i;
        for(let j=i+1;j<arr.length;j++){ // length: 6;  i = 4 -> j = 5
            if(arr[temp]>arr[j]){
                temp = j;
            }
        }
        [arr[i],arr[temp]] = [arr[temp],arr[i]]; 
    }
    return arr;
}
// log('select--->',select(arr));
