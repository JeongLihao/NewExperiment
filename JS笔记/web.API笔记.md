## Web APIs
1. 变量声明
const 优先，尽量使用const，如果发现它后面是要被修改的，再改为let

2. 根据css选择器来获取DOM元素
```js
document.querSelector('css选择器')
```
+ 返回值：
CSS选择器匹配的第一个元素（一个HTMLElement对象）                 
如果没有匹配到，则返回null。

### 操作元素内容
1. innerText属性
+  将文本内容添加/更新到任意标签位置
+  显示纯文本，不解析标签
```js
const info = document.querySelector('.info')
info.innerText = '你好'
```

2. innerHTML属性
+  将文本内容添加/更新到任意标签位置
+  会解析标签，多标签建议使用模板字符
```js
const info = document.querySelector('.info')
info.innerHTML = '你好，<strong>世界</strong>'
```

### 操作元素属性
### 一.操作表单元素属性
1. 正常的有属性有取值的
    + 获取: DOM对象.属性名
    + 设置: DOM对象.属性名 = 新值
    ```js
    表单.value = '用户名'
    ```
2. 表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示 如果为true 代表添加了该属性；如果是false 代表移除了该属性
    ```html
    <input type="checkbox" disable>篮球
    <input type="checkbox" >足球
    <input type="checkbox" >羽毛球
    ```
    ```js
    // 例如：disabled、checked、selected
    const chk = document.querySelector('[disable]')
    chk.disable = false    // 即该多选框可用
    ```

### 自定义属性
作用：相当于能在标签中存储一定的变量

- 在标签上一律以data-开头
- 在DOM对象上一律以dataset对象方式获取

声明：直接在标签中书写 `data-`
```html
<div class="d1" data-name="张三" data-age="20">我是一个测试div</div>
```
调用
```js
const d1 = document.querySelector('.d1')
console.dir(d1)
console.log(d1.dataset.name)
```

## 定时器--间歇函数（间隔单位是毫秒）
一个函数，每隔一段时间，去完成一个工作    
作用：完成页面中倒计时操作
1. 开启定时器语法:  `setInterval(函数,间隔时间)`
2. 关闭定时器语法：`clearInterval(变量名)`
```js
let s = 
const timer = setInterval(function () {
     s--  
     console.log(`时间还剩${s}秒`)
    if(s === 0) {
        clearInterval(timer)
    }
},1000)  
```