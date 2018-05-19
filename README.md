# workDemo

 #有趣的小问题
   ##问题1

 * 此问题与数组相关 
 * 1:了解素组相关方法
 * 此问题针对那些会返回一个新数组不改变原数组的数组方法
 * 此问题用来说明数组元素是字符串和数字 与 数组对象是对象的区别 例如:[1,2,3] 与 [{num:1},{num:2},{num:3}]
 * 本例子使用了slice()方法做示例
 * slice()方法:可从已有的数组中返回选定的元素。返回值:返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 * 说明:请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
 * (数组说明来自W3C标准  http://www.w3school.com.cn/jsref/jsref_slice_array.asp)

```
var arr1 = [1,2,3,4];
var arr2 = [{num:1},{num:2},{num:3},{num:4}];

var arrSlice = function(arr){
    var newArr = arr.slice(1,3)
    console.log('newArr===',newArr);
    console.log('oldArr===',arr);
    newArr[0] = 55555;
    console.log('newArr-last===',newArr);
    console.log('oldArr-last===',arr);
}
arrSlice(arr1);


var arrSlice2 = function(arr){
    var newArr = arr.slice(1,3)
    console.log('newArr2===',newArr);
    console.log('oldArr2===',arr);
    newArr[0].num = 55555;
    console.log('newArr2-last===',newArr);
    console.log('oldArr2-last===',arr);
}
arrSlice2(arr2);
```
  ###问题所在:
  从slice()定义上看出获取的新数组newArr是一个新数组不会修改老数组
  从两个方法输出对比;都是通过slice()方法获取的新数组newArr然后对newArr进行操作,为什么操作后
  arr1的原数组未发生改变( console.log('oldArr-last===',arr)处看出)
  而arr2的原数组发生了改变(console.log('oldArr2-last===',arr)处看出)
  涉及主要知识点js数组,对象,对象克隆,slice()方法  (注:本人认为此处可以用后台语言中的对象指针和对象地址来解释更容易理解)
