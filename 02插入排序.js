const { log } = console;
// 插入排序  var arr = [2,4,5,23,67,112,250,290, ];  num = 25;
    // 1.找位置
    // 2.移位置
    // 3.赋值插数
    // let arr = [2,4,5,23,67,112,250,290];
    let arr = [1,2,4,5,6];
    function insert(num){
        // 找位置
        for(var i=0;i<arr.length;i++){
            if(num <= arr[i]){
                break;
            }
        }
        // 移位置
        for(let j=arr.length;j>=i;j--){  // [1,2,i,4,5,6]  3
            arr[j] = arr[j-1];
        }
        // 赋值
        arr[i] = num;
        return arr;
    }
    // log('插入排序--->',insert(25));
    // log('插入排序--->',insert(3));
