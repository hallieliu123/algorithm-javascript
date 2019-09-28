const { log } = console;

// 冒泡排序:输入6个无序的数字，从头到尾依次比较相邻两个数字大小，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列
// let arr = [ 8,1,6,3,2,5,9 ];  8,1,6,3,2,5,9
function mySort(arr){
    // 外层循环用来遍历所有元素  
    // 内层循环用来取值比较
    for(let i=0;i<arr.length;i++){  
        for(let j=0;j<arr.length-i;j++){ 
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr
}
// log('mySort---->',mySort([8,1,6,3,2,5,9]));
  
   // 反转数字
   var arr2 = [1,2,3,4,5,6,11,12,13,14,15,16];  // [1,2,3,4]  [1,2,3,4,5] 2.5
   function myReverse(arr){
        for(let i=0;i<parseInt(arr.length/2);i++){
            [arr[i],arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[i]]
        }
        return arr;
   }
//    log('myReverse--->',myReverse(arr2));





