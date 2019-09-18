/**
 * Library sort 优于传统的插入排序 (时间复杂度为 O(n^2)) , 它的时间复杂度为O(nlogn)
 * 思想 : ：一个图书管理员需要按照字母顺序放置书本，当在书本之间留有一定空隙时，
 * 一本新书上架将无需移动随后的书本，
 * 可以直接插空隙。Library sort的思想就源于此
 */

// Library Sort基于折半查找的插入排序，插入时在元素附近空出一定位置，这样推入后移动元素的复杂度由原来的O(n)下降为平均O(1)，于是整个算法的复杂度达到O(nlogn)。
//当输入正序或倒序时，插入点都在同一位置，“留空位”的策略失效，这时就出现最坏复杂度O(n^2)


/**
 * length : 待排序元素个数
 * elements : 待排序数组
 * factor : 常数因子(留空位)
 */
var librarySort = function(length,factor,elements) {
    var i , j ;
    //扩展后的数组长度
    var expandedLen = (1+factor)*length ;
    
    //标志gap
    var flag = 1<<31 ;
    
}