const { log } = console;

// 冒泡 let arr = [ 8,1,6,3,2,5,9 ];  8,1,6,3,2,5,9
{
    const bubble = (arr) => {
        for(let i=0;i<arr.length;i++){  // *** 
            for(let j=0;j<arr.length-i;j++){   
               if(arr[j]>arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
               }
            }
        }
        return arr;
    }
    let arr = [ 8,1,6,3,2,5,9 ];
    // log(bubble(arr));
}
// 选择排序  let arr = [112,23,4,5,2,67];
{
    const select = (arr)=>{
        for(let i=0;i<arr.length;i++){ // 取所有数据
            let temp = i;
            for(let j=i+1;j<arr.length;j++){
                if(arr[temp] > arr[j]){
                    temp = j;
                }
            }
            [arr[i],arr[temp]] = [arr[temp],arr[i]];
        }
        return arr;
    }
    let arr = [ 8,1,6,3,2,5,9 ];
    // log(select(arr));
}
// 插入排序 let arr = [ 8,1,6,3,2,5,9 ];  7
{
    const insert = (arr,val) => {
        // 1排序
        arr.sort();
        // 2找位置
        let index = arr.findIndex(item=>item>val); // 返回第一个满足条件的下标
        // 3移位置
        for(let i=arr.length;i>index;i--){
            arr[i] = arr[i-1];
        }
        // 4赋值 
        arr[index] = val;
        return arr;
    }
    let arr = [ 8,1,6,3,2,5,9 ];
    // log(insert(arr,7));
}
// 折半查找  let arr = [1, 2, 3, 5, 6, 8, 9]
{
    const bisearch = (arr,val) => { // 1,2,3,4,5      5/2 = 2.5    1,2,3,4   4/2 = 2
        let hasNum = false;
        arr.sort();
        let low = 0;
        let high = arr.length-1;
        let mid = parseInt((high+low)/2,10);
        while(high>=low){
            if(arr[mid]==val){
                hasNum = true;
                break;
            }else if(val>arr[mid]){
                low = mid + 1;
                mid = parseInt((high+low)/2,10);
            }else if(val<arr[mid]){
                high = mid - 1;
                mid = parseInt((high+low)/2,10);
            }
        }
        return hasNum;
    }
    let arr = [ 8,1,6,3,2,5,9 ];
    // log(bisearch(arr,5));
}
// A star 寻路
{
    
}
