const { log } = console;
/**
 * A star 的估价函数
 *  f(n) = g(n) + h(n);
 *  fn(n)是n节点的估价函数
 *  g(n)是初始点到n节点的实际代价
 *  h(n)是n节点到目标点的实际代价
 */
/**
 * A star 算法实现
 * open 队列： 排序估价函数
 * close 队列：排除干扰节点
 */
var map = [
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,2,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];
let oUl = document.getElementById('container');
let aLi = document.getElementsByTagName('li');
let gridSize = Math.sqrt(map.length);
let openArr = [];  // 所有可行路线的队列
let closeArr = []; // 所有不可行路线的队列 和 已走队列
let beginLi = document.getElementsByClassName('sty1');
let endLi = document.getElementsByClassName('sty2');

init();

function init(){
    let oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
        openFn();
    }
    oUl.style.width = 20 * (20 + 1) + 'px';
	for(var i=0;i<map.length;i++){
		var oLi = document.createElement('li');
		oLi.style.width = 20 + 'px';
		oLi.style.height = 20 + 'px';
		oUl.appendChild(oLi);
		
		if( map[i] == 1 ){
			oLi.className = 'sty1';
			openArr.push(oLi);
		}
		else if(map[i] == 2){
			oLi.className = 'sty2';
		}
		else if(map[i] == 3){
			oLi.className = 'sty3';
			closeArr.push(oLi);
		}
	}
}

function openFn(){
    let nowLi = openArr.shift();
    if(nowLi == endLi[0]){
        showPath();
        return;
    }
    closeFn(nowLi);
    findLi(nowLi);
    openArr.sort((a,b)=>a.dis-b.dis);  // 最近的排前面
    // log(openArr);
    openFn();
}
function showPath(){
    let result = [];
    let lastLi = closeArr.pop();
    let iNow = 0;
    findParent(lastLi);
    function findParent(li){
        result.unshift(li);
        if(li == beginLi[0]){
            return 
        }
        findParent(li.parent);   
    }   
    let myTimer = setInterval(()=>{    
        result[iNow].style.background = 'red';
        iNow++;
        if(iNow>=result.length){
            myTimer && clearInterval(myTimer);
        }
    },500)
}
function closeFn(nowLi){
    closeArr.push(nowLi);
}
function findLi(nowLi){
    let result = [];  // 储存所有可行队列
    for(let i=0;i<aLi.length;i++){
        if(!closeArr.includes(aLi[i]) && !openArr.includes(aLi[i])){ // close队列和open队列中已经有的不要再放入了
            result.push(aLi[i]);
        }
    }
    // let temp = result.filter(item=>(Math.abs(item.offsetLeft-nowLi.offsetLeft)<=(gridSize+1)&&Math.abs(item.offsetTop-nowLi.offsetTop)<=(gridSize+1)));
    // Array.prototype.push.apply(openArr,temp);
    // openArr.push(...temp);
    for(let i=0;i<result.length;i++){
        if(Math.abs(result[i].offsetLeft-nowLi.offsetLeft)<=(gridSize+1) && Math.abs(result[i].offsetTop-nowLi.offsetTop)<=(gridSize+1)){
            result[i].dis = f(result[i]);
            result[i].parent = nowLi;
            openArr.push(result[i]);
            // 按照最短距离排序准备
        }
    }
}
function f(nowLi){
    return g(nowLi) + h(nowLi)
}
function g(nowLi){
    let l = beginLi[0].offsetLeft - nowLi.offsetLeft;
    let t = beginLi[0].offsetTop - nowLi.offsetTop;
    return Math.sqrt(l*l+t*t)
}
function h(nowLi){
    let l = endLi[0].offsetLeft - nowLi.offsetLeft;
    let t = endLi[0].offsetTop - nowLi.offsetTop;
    return Math.sqrt(l*l+t*t)
}






