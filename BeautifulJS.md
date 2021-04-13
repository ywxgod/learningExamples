[TOC]



## 问题

如何用一行代码初始化一个有10个元素的数组，数组元素依次为其下标，即：0,1,2,3,4,5,6,7,8,9

## 如何实现

```javascript
// 一般实现很简单
[...new Array(10).keys()];
Array.from({length:10}, (i,j) => j);
Array(10).fill().map((i,j) => j);
// 漂亮的实现
[...Array(10)].map(eval.call, Number);
Array.apply(null, { length: 10 }).map(eval.call, Number)
```

## 漂亮的实现

一般的实现就不说了，我们看漂亮的那种。不过大神可以飘过哈~~~~

```javascript
Array.apply(null, { length: 10 }).map(eval.call, Number)
```

下面就来解释一下，我从左往右看。

### Array - 如何初始化数组

Array数组的构造函数，一般有如下的用法：

```javascript
//创建初始数组 - 长度为10但没有元素的数组
arr1 = Array(10); // [empty * 10]
arr1.forEach(i => console.log(i)) // 没有输出
arr1[0] // 无法遍历，但是访问时显示undefined
arr2 = new Array(10); // 效果同arr1
arr3 = new Array(0,1,2,3,4,5,6,7,8,9); // 创建长度为10，填充0-9的数组
```

就是说要创建有多个初始值的数组，只能用上面第五行的方法。

**问题**：当Array的参数是一个数字时，它表示数组长度，且创建的数组元素却为空；当Array的参数多于一个数字时，它会用了初始化数组，表示创建的数组的初始元素。ES6的Array.of据说就是为了解决这个问题的，大家可以再了解一下。

### apply - apply的用法

>   apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或**类似数组对象**）提供的参数。

我们知道apply方法是Function.prototype上定义的，即每个函数都可以调用apply方法，包括类的构造函数。

apply的一般用法有：

```javascript
arr = [1,2,3];
Math.max.apply(null, arr); // 3
Math.max(1,2,3); // 3
```

### { length: 10 } - 什么是类数组

>   一些 JavaScript 对象, 例如 document.getElementsByTagName() 返回的 NodeList 或者函数内部可用的 arguments 对象，他们表面上看起来，外观和行为像数组，但是不共享他们所有的方法。例如 arguments 对象就提供一个 length 属性，但是不实现 forEach() 方法。

类数组定义：

```javascript
// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are 
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded 
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
    if (o &&                                // o is not null, undefined, etc.
        typeof o === 'object' &&            // o is an object
        isFinite(o.length) &&               // o.length is a finite number
        o.length >= 0 &&                    // o.length is non-negative
        o.length===Math.floor(o.length) &&  // o.length is an integer
        o.length < 4294967296)              // o.length < 2^32
        return true;                        // Then o is array-like
    else
        return false;                       // Otherwise it is not
}
```

似乎最基本的要求是：**要有length属性且值为非负整数**。常见的类数组对象有：函数参数arguments对象。

**问题**：如何将类数组对象转为数组对象，ES6的剩余参数，是不是类数组？

### Array.apply(null, { length: 10 })

理解了上面的三点，现在应该能理解上面的代码了。上面的代码我们也可以写成这样的：

```javascript
Array.apply(null, Array(10)) 
// 或者
Array.apply(null, new Array(10))
```

只要apply的第二个参数是一个数组即可。实际上等同于：

```javascript
Array(undefined,undefined,undefined,...) // 10个undefined
// 想象一下下面的代码，把Math.max换成Array
// Math.max.apply(null, [1,2,3]) === Math.max(1,2,3)
```

所以最终得到的是：**用undefined填充的长度为10的数组，这个数组是可以遍历的，不像上面初始化的有长度的空数组不可遍历。**

```javascript
[ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
```

### Array.prototype.map - map的用法

>   map(callback[, thisObject]) 在数组的每个单元项上执行callback函数，并把返回包含回调函数返回值的新数组

map的用法大家都很熟悉，但thisObject参数可能很少用，特别是有箭头函数后，更是不用了。相关例子：

```javascript
["10", "20", "lol"].map(Number); // [10,20,NaN]
// 注意map的第二个参数
["a", "b", "c"].map(function(char) { 
  return this[char];
}, {a: 1, b: 2, c: 3}); // [1,2,3]
```

实际上可以理解为callback的作用域就是thisObject,即在thisObject的域中调用callback，等价于:

```javascript
let fun = callback.bind(thisObject)
[].map(fun)
// 注意：这里传给fun函数的参数有：element，index, array 三个
```

### eval.call - call的用法

call跟apply一样都是来自Function.prototype, 所以任何函数都可以调用，不同之处call需要的参数不是数组，而是单个的参数。

```javascript
function.call(thisArg, arg1, arg2, ...)
```

所以eval.call实际上是Function.prototype.call。

```javascript
// 接上面的代码，现在是这样子：
[undefined, undefined, ....].map(eval.call, Number)；
// 但实际上是下面这样的，即对每一个元素调用变成如下：
eval.call.bind(Number, undefined, index, array)()
// 新数组的每一元素为：eval.call.bind(Number,undefined, index, array)函数调用的结果
// 再将bind改为call的形式，即：
eval.call.call(Number, undefined, index, array)
// 即: 在Number上调用call方法，并传undefined，index，array三个参数，变成如下：
Number.call(undefined, index, array)
// 即: 调用Number(index, array)时设置其this为undefined。
// 但是此处Number调用并不关心this作用域，并未用到this,变成如下：
Number(index, array);
// Number构造函数会忽略第二个参数，所以直接变成了：
Number(index) // index
```

**问题**：如果将代码改成这样, 结果会怎样？

```javascript
Array.apply(null, { length: 10 }).map(alert.call, Number)
```

## 补充练习

```javascript
s = {
    test:function(){
        console.log('s:',arguments)
    }
}
s2 = {
    test:function(){
        console.log('s2',arguments)
    
    }
}

s.test.call.bind(s2.test,1,2,3)()
s.test.call.call(s2.test, 1, 2, 3)
s2.test.call(1,2,3);
s2.test(2,3);


t = s.test.call.call.call(Array,1,2);
console.log(t);
Array.call(1,2)
Array(2)
```



## 参考资料

-   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects
-   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
-   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number
-   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
-   https://segmentfault.com/a/1190000000415572
-   https://stackoverflow.com/questions/34916477/a-is-a-function-then-what-a-call-call-really-do
-   https://juejin.im/post/5a11b77051882529642148ba






