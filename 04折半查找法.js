const { log } = console;

// 折半查找法
/**用折半查找法在一组排好序(递增有序或递减有序)的值中查找 某个数据。
     折半查找的基本思想: 
        1.首先将待查数据k与排好序(递增有序)的一组数据的 中间位置上的数据进行比较，若相等，则查找成功; 
        2.若k>a[mid]，则待查数据k只可能出现在右半部 a[mid+1...n]中,则应在这个右半部中再进行折半查找; 
        3.若k<a[mid]，则待查数据k只可能出现在左半部 a[1...mid-1]中,则应在这个左半部中再进行折半查找; 
        4.这样通过逐步缩小查找范围，直到找到或找不到该数据k为止
    */
var  arr=[5,13,19,21,37,56,64,75,80,88,92];  // 80  [1,2,3,4,5]    [1,2,3,4] 
// 就是一个找下标的过程
/**
 *   low         mid           high
 *    0           5            10
 *                  low        high
 *                   6          10
 *                        mid
 *                         8
 *                           low  high
 *                             9   10
 *                               mid
 *                                9
 *                                  low
 *                                   10
 */
function bisearch(num){
    let hasNum = false;
    let low = 0;
    let high = arr.length-1;
    let mid = parseInt((high+low)/2)
    while(high>=low){
        if(num == arr[mid]){
            hasNum = true;
            break;
        }else if(num>arr[mid]){
            low = mid + 1;
            mid = parseInt((low+high)/2);
        }else{
            high = mid - 1;
            mid = parseInt((low+high)/2);
        }
    }
    return hasNum;
}
// log('bisearch--->',bisearch(80));
// log('bisearch--->',bisearch(81));
