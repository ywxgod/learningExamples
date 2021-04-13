[TOC]



## 问题

```javascript
1、"" + 1 + 0
2、"" - 1 + 0
3、true + false
4、6 / "3"
5、"2" * "3"
6、4 + 5 + "px"
7、"$" + 4 + 5
8、"4" - 2
9、"4px" - 2
10、7 / 0
11、" -9  " + 5
12、" -9  " - 5
13、null + 1
14、undefined + 1
15、" \t \n" - 2

16、5 > 4
17、"apple" > "pineapple"
18、"2" > "12"
19、undefined == null
20、undefined === null
21、null >= 0
22、null > 0
23、null == "\n0\n"
24、null === +"\n0\n"

25、[1] > null
26、"foo" + + "bar"
27、'true' == true
28、false == 'false'
29、null == ''
30、!!"false" == !!"true"
31、['x'] == 'x'
32、[] + null + 1
33、[1,2,3] == [1,2,3]
34、{}+[]+{}+[1]
35、!+[]+[]+![]
36、new Date(0) - 0
37、new Date(0) + 0
```

## 什么时候类型会被转换

1.  不同类型的数据进行运算时

```javascript
true+1;
123+'123';
45-{}-'2'-true;
```

2.  不同类型的数据进行比较操作时

```javascript
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

3.  需要显示转换时

```javascript
String(123);
Number('123');
Boolean(123);
```

## 如何转换

-   加号两边只要有一个是字符串，另一个会被转为字符串。
-   其他符号(-/*)连接的两个操作数都会被转为数字再计算。
-   比较不同类型的两个数都会转为数字再比较。

## 具体的转换规则

### 简单类型的互相转换

简单类型一般是指：String，Number，Boolean，Symbol（null，undefined是否也算简单类型？）

1.  转字符串

    一般用String()，toString()方法，基本看到什么就转为什么。

    ```javascript
    let age = 20;
    console.log(String(age));
    console.log(age.toString());
    let hasFound = true;
    console.log(String(hasFound))
    console.log(hasFound.toString())
    let sym = Symbol('mySym')
    console.log(String(sym));
    console.log(sym.toString());
    // 注意这两行
    console.log(String(null));
    console.log(String(undefined));
    ```

2.  转数字

    一般用Number(), parseInt, parseFloat, 一元运算符+ 等, 其中一元运算符等价于Number(); Symbol不允许隐式转换。

    布尔类型转为数字时用Number，不要用parseInt。

    ```javascript
    let arr1 = ['1',' 1 ',' 1px ', true].map(Number);
    let arr2 = ['1',' 1 ',' 1px ', true].map(parseInt);
    // let arr3 = ['1',' 1 ',' 1px ', true].map(i => parseInt(i));
    console.log(arr1, arr2);
    
    sym = Symbol('sym');
    Number(sym) // Cannot convert a Symbol value to a number
    sym+1       // Cannot convert a Symbol value to a number
    sym+'1'     // Cannot convert a Symbol value to a string
    sym-1       // Cannot convert a Symbol value to a number
    ```

3.  转布尔值

    一般用Boolean()方法，实际操作中我们用!!。false,'',0,-0,null,undefined,NaN 这些转为false，其他全部转为true

4.  转Symbol

    NoWay！

### 复杂类型转简单类型

1.  任何复杂类型转为布尔值都为true。

2.  对于转字符串和数字的情况，则有所不同。js会先检查对象是否存在Symbol.toPrimitive(hint)方法。

-   toPrimitive方法要求必须返回一个字符串或者数字，如果复杂对象存在此方法，但是返回的不是字符串或者数字则会抛出类型错误。

    ```javascript
    obj = {
        [Symbol.toPrimitive](hint){
            console.log(hint);
            return {}
        }
    }
    alert(obj) // 抛出TypeError错误
    ```

-   不存在toPrimitive时，需要转字符串时，先调用toString方法，toString如返回复杂对象，则会继续调用valueOf方法，如valueOf也返回复杂对象，则报错。

-   不存在toPrimitive时，需要转数字时，先调用valueOf，套路跟上面一样。

    ```javascript
    obj = {
        toString(){
            console.log('toString');
            return 'obj';
        },
        valueOf(){
            console.log('valueOf');
            return 12;
        }
    }
    alert(obj+1) // 13
    alert(obj)   // obj
    ```




## 问题答案

```javascript
// 只要有一个字符串，加号另一边也转为字符串
"" + 1 + 0 = "10" 
// 减号两边会分别转为数字		
"" - 1 + 0 = -1
// 非字符串相加，则都转为数字 		
true + false = 1
// 除法两边转为数字		
6 / "3" = 2
// 乘法同除法				
"2" * "3" = 6
// 先算数字加法得9，然后再连接字符串			
4 + 5 + "px" = "9px"
// 先连接前两个操作数，然后用前面的结果连接第三个	
"$" + 4 + 5 = "$45"
// 减号两边转数字		
"4" - 2 = 2
// 先分别转数字，‘4px’转数字后为NaN				
"4px" - 2 = NaN
// 除零得无穷大			
7 / 0 = Infinity
// 只要有一个字符串，加号另一边也转为字符串		
" -9  " + 5 = " -9  5"
// 先转数字，第一个操作数转为-9 	
" -9  " - 5 = -14
// 先转数字，null转数字后为0 		
null + 1 = 1
// 先转数字，undefined转数字后为NaN 			
undefined + 1 = NaN
// 先转数字，第一个操作数转数字后为0 	
" \t \n" - 2 = -2 
		
// true 不转换
5 > 4
// false 不转换							
"apple" > "pineapple"
// true 不转换		  	
"2" > "12"	
// true null只与undefined或自身相等(==)					 	
undefined == null
// false 不同类型		  	
undefined === null
// true null转为数字0			  	
null >= 0
// false 同上 						
null > 0
// false null只与undefined自身相等(==)						
null == "\n0\n"
// false 类型不同				  	
null === +"\n0\n"			  	
			
/**
 * 两边先分别转数字，数组属于复杂类型，所以先判断是否有toPrimitive。
 * 数组对象并不存在Symbol.toPrimitive方法，所以调用valueOf方法，但数组的valueOf方法返回的是其本身，
 * 即，非简单类型，所以继续调用toString，所以返回的是字符串'1', 继而转为数字1，而null转为数字0
 * 所以结果是true
 **/
[1] > null						

/**
* 先算一元运算+'bar'，得到NaN，所以结果是foo与NaN相连得到'fooNaN'
*/
"foo" + + "bar"	 				

/**
* 先两边转数字，得到 NaN和1，所以结果为false
*/
'true' == true
// 同上  				
false == 'false'
// false null只等于undefined或自身 				
null == ''
// 先分别转为boolean值，然后再比较，非空字符串转布尔值为true，所以两边都是true						
!!"false" == !!"true" 			

/**
* 参考第一个，数组最终会转为'x',而另一边也是'x',所以是字符串比较，无需再转换，即'x'=='x'
*/
[‘x’] == ‘x’     				 

/**
* []+null+1 => ''+null+1 => 'null'+1 => 'null1'
*/
[] + null + 1 
// false 引用的内存地址不同					
[1,2,3] == [1,2,3] 				

/**
* {}+[]+{}+[1]
* => +[]+{}+[1]                  //第一个{}被当成了块语句，所以直接忽略,正在计算是从+[]开始
* => 0+{}+[1]                    //+[]被转为数字0
* => 0+'[object Object]'+[1]     //{} 先调用valueOf，发现返回本身，再调用toString，所以返回[object Object]
* => '0[object Object]'+[1]
* => '0[object Object]1'         // [1] 先调用valueOf，返回本身，再调用toString，返回1
*/
{}+[]+{}+[1] 					
/**
* 根据优先级拆分为 (!+[])+[]+(![])
* => !0+[]+false
* => true+[]+false
* => true+''+false
* => 'truefalse'
*/
!+[]+[]+![] 
// 0 调用Date的valueOf转为数字，valueOf返回的是0					
new Date(0) - 0 
// Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0 调用Date的toString方法转为字符串再加0 				
new Date(0) + 0  				
```




