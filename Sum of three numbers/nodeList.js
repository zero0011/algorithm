//定义链表
function Node(el){
    this.el=el;
    this.next=null;
}

//  1.构造函数
function Link(){
    this.head = new Node('head');
}

//  2.find  查找链表中的元素
Link.prototype.find = function(el) {
let currNode = this.head;
while(currNode&&currNode.el != el){
    currNode = currNode.next;
}
return currNode;
}

//  3.insert    添加一个节点
Link.prototype.insert = function(newnode,prenode){
    let currNode = this.find (prenode);
    let insertNode = new Node(newnode);
    if(currNode){
        insertNode.next = currNode.next;
    currNode.next = insertNode;
    }else{
        return currNode;
    } 
}

//4.display     显示节点链表元素
// 展示链表中的元素
Link.prototype.display = function () {
var currNode = this.head.next;
while (currNode) {
    console.log(currNode.el);
     currNode = currNode.next;
    // var arrs =[];
    // for(let arr of arrs){
    //     arr=currNode.el;
    // }
    // console.log(arrs);
    // return arrs;
}
}

//在链表的最后插入一个结点
Link.prototype.attach = function(el){
var currNode = this.head;
while(currNode.next != null){
    currNode=currNode.next;
}
let newnode = new Node(el);
currNode.next=newnode;
newnode.next=null;
}


// var list =new Link();
// list.attach(9);
// list.display();



//题解思路
/*
    1.先把数组存储到一个对象中
    2.解决哈希冲突
    3.把对象中每一个属性设置为一个单向链表
*/


//要存储的数组
var nums =[-1,0,1,2,-1,-4];

//把数组放入对象中函数的实现
//返回对象
function  NumstoObj(nums){
    var obj={}
    for(var i=0;i<nums.length;i++){
        obj[i]=nums[i];
    }
    return obj;
}
console.log(NumstoObj(nums));
