## 数组
### 1.基本使用
1. 声明语法
```js
let 数组名 = [数据1,数据2,数据3......]
```
编号从0开始

2. 取值语法
```js
数组名[下标]
let name = ['小明','小刚','小红']
name[0] //小明
name[1] //小刚
```
* 元素：数组中保存的每个数据都叫数组元素
* 下标：数组中数据的编号
* 长度：数组中数据的个数，通过数组的length属性获得

3. 如何遍历数组
语法：
```js
for(let i = 0 ; i <数组名.length; i++){
    数组名[i]
}
```
### 操作数组
1. 新增
数组.push()：方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度（常用）
```js
arr.push(元素1,...,元素n)
```
数组.unshift()：在数组开头添加一个或多个元素
```js
arr.unshift(元素1,...,元素n)
```

2. 删除
pop()：从数组中删除最后一个元素，并返回该元素的值
```js
arr.pop()
```
shift()：从数组中删除第一个元素，并返回该元素的值
```js
arr.shift()
```
splice()：删除指定元素
```js
arr.splice(start,deleteCount)
arr.splice(起始位置，删除几个元素)
```
start起始位置
+ 指定修改的开始位置
deleteCount:
+ 表示要已移除的数组元素的个数
+ 可选的，如果省略则默认从指定的起始位置删除到最后

### 数组排序
sort()：可以排序
```js
let arr = [4,2,5,1,3]
//1.升序排列写法
arr.sort(function(a,b){
    return a-b
})
console.log(arr) //[1,2,3,4,5]
//降序排列写法
arr.sort(function(a,b){
    return b-a
})
console.log(arr) //[5,4,3,2,1]
```
