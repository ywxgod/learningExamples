[TOC]

很庆幸还有一次给大家做分享的机会，今天就分享一段ts相关的代码，我们就简单一点吧，直接看代码

```typescript
type Primitive = string | number | boolean | bigint | symbol | undefined | null
type Builtin = Primitive | Function | Date | Error | RegExp
export type DeepReadonly<T> = T extends Builtin
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends ReadonlyMap<infer K, infer V>
      ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
      : T extends WeakMap<infer K, infer V>
        ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
        : T extends Set<infer U>
          ? ReadonlySet<DeepReadonly<U>>
          : T extends ReadonlySet<infer U>
            ? ReadonlySet<DeepReadonly<U>>
            : T extends WeakSet<infer U>
              ? WeakSet<DeepReadonly<U>>
              : T extends Promise<infer U>
                ? Promise<DeepReadonly<U>>
                : T extends {}
                  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
                  : Readonly<T>
```

https://github.com/vuejs/vue-next/blob/master/packages/reactivity/src/reactive.ts

这是vue3源码中的一段类型声明，大家看看这都是啥？。。。有没有人能理解？举手解释一下？

要搞清楚上面是干嘛的，我们得先了解一下泛型，条件类型，infer关键字，递归类型，keyof，Readonly关键字...

## 泛型(略)（第3行）

大家都知道

## 条件类型（第3行）

```typescript
T extends Builtin ? T : U
```

上面的意思是：T如果是Builtin的子集，那么取T，否则取U，如下代码：

```typescript
type A = string
type B = "1"
type AisB = A extends B ? true : false // false
type BisA = B extends A ? true : false // true
```

从上面的代码其实很容易理解，extends的用法很像三元运算符，即if..else...

**提问：上面的类型AisB,BisA具体是什么类型？如何判断两个类型是相等的？**

## Infer（第5行）

```typescript
T extends Map<infer K, infer V> ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> : U
```

>   Within the `extends` clause of a conditional type, it is now possible to have `infer` declarations that introduce a type variable to be inferred

infer一般会用在条件类型的子句中，infer的作用是让ts自己推断出某个类型，继而定义一个类型变量，而不是我们自己定义一个类型变量。如下：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

源码中的Map<infer K, infer V>实际是通过infer关键字定义了两个类型变量K，V，且ts自动推断其类型。看如下例子：

```typescript
type User = { id: number, name: string };
type Doc = { id: string }
type GetPropertyType<T, P extends keyof T> = T extends {[K in P]: infer V} ? V : never;
let prop1: GetPropertyType<User,'id'> = 2;
let prop2: GetPropertyType<Doc, 'id'> = '2';
```

除了上面的Map、Object应用，infer最常用的几种场景：

-   **推断promise的返回值类型**(传一个Promise类型进去，返回Promise类型中最终的数据类型)

-   ```typescript
    type PromiseValueType<T> = "Your codes here";
    ```

-   **推断函数参数的类型**(传一个带参数的函数类型进去，返回这个函数的参数类型)

-   ```typescript
    // 定义一个函数类型，函数有参数和返回值
    type FunWithArgs<T,R> = (props:T) => R;
    // 定义一个类型，此类型获取函数类型的参数类型
    type ArgsType<T> = "Your codes here"；
    ```

-   **推断函数的返回值类型**(传一个有返回值的函数类型进去，返回这个函数类型的返回值类型)

-   ```typescript
    type ReturnTypeOfFun<T> = "your codes here";
    ```

-   **从一种函数类型推断其追加参数后的函数类型**(传入一个带参数的函数类型进去，返回给此函数追加参数后的函数类型)

    ```typescript
    type AppendArgs<F,A> = "Your codes here";
    ```

## ReadonlyMap（第6行）

ReadonlyMap很明显跟Map一样是一种已经定义好的类型，不过我在vue3源码始终没找到它的定义。后来谷歌发现在这里：

https://github.com/microsoft/TypeScript/blob/master/lib/lib.es2015.collection.d.ts

```typescript
interface ReadonlyMap<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}
```

这是ts已经帮我声明好的一个全局类型，跟Map，Set一样可以直接用。。。再看看Map的定义

```typescript
interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}
```

差别在于ReadonlyMap少了clear，delete，set操作，它只是Map的一个immutable版本。我们如果想让Map不可改动，那么可以直接转为ReadonlyMap类型，看看下面的用法：

```typescript
function createReadonlyMap<K,V>(k:K, v:V): ReadonlyMap<K, V> {
    const map: Map<K, V> = new Map([[k,v]]);
    return map as ReadonlyMap<K, V>;
}
let m = createReadonlyMap<string,boolean>('a',true);
m.get('a');
```

运行效果：（提示中没有对Map进行修改的方法了）


**上面的代码有没有优化的地方？。。。**

>   [`ReadonlyMap`](https://github.com/Microsoft/TypeScript/blob/v2.8.1/lib/lib.es6.d.ts#L4703-L4708) is essentially a *supertype* of [`Map`](https://github.com/Microsoft/TypeScript/blob/v2.8.1/lib/lib.es6.d.ts#L4686-L4694) since the methods and properties it does have match up with those of `Map<K,V>`. So by returning a `Map` as a `ReadonlyMap`, all you're doing is widening the type of the value. By the way, that means you can skip the type assertion:

## 类型递归（第6行）ts4.1

在DeepReadonly的声明中又出现了DeepReadonly，这其实是一种类型递归调用。看看ts是如何定义和处理这种类型的

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types

>   In JavaScript it’s fairly common to see functions that can flatten and build up container types at arbitrary levels. Expressing this in TypeScript’s type system was, for all practical intents and purposes, not possible. While there were hacks to achieve this, the types ended up looking very unreasonable. In TypeScript 4.1, conditional types can now immediately reference themselves within their branches, making it easier to write recursive type aliases.

用法示例：展平数组

```typescript
type ElementType<T> = T extends Array<infer U> ? ElementType<U> : T;

function flattenArray<T extends Array<any>>(a:T):ElementType<T>[] {
    return a.reduce((acc,item,index) => {
        if (Array.isArray(item)){
            acc = acc.concat(flattenArray(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
}

let s = flattenArray([1,[2,[3,[4,5,[6]]]]]);
console.log(s);
```



## 问题答案

**推断promise的返回值类型**(传一个Promise类型进去，返回Promise类型中最终的数据类型) **(看上面代码17行)**

```typescript
type PromiseValueType<T> = T extends Promise<infer U> ? U : never;
const t1: PromiseValueType<Promise<string>> = '1';
const t2: PromiseValueType<Promise<Date[]>> = [new Date()];
```

**推断函数参数的类型**(传一个函数类型进去，返回这个函数的参数类型)

```typescript
// 定义一个函数类型，函数有参数和返回值
type FunWithArgs<T,R> = (props:T) => R;
// 定义一个类型，此类型获取函数类型的参数类型
type ArgsType<T> = T extends FunWithArgs<infer P, any> ? P : never;

function testArgsType(a:{a:string,b:number}) {
    return [1];
}
let xx:ArgsType<typeof testArgsType> = {a:'1',b:1};
```

**推断函数的返回值类型**(传一个函数类型进去，返回这个函数类型的返回值类型)

```typescript
type ReturnTypeOfFun<T> = T extends (...rest:any[]) => infer U ? U : never;
function test():boolean[] {
    return [true];
}
let returnTypeOfFun:ReturnTypeOfFun<typeof test> = [true];

// 利用ts提供的类型工具RetrunType
type ReturnTypeOfFun2<T extends (...rest:any[]) => any> = ReturnType<T>;
let returnTypeOfFun2:ReturnTypeOfFun2<typeof test> = [true];
```

**从一种函数类型推断其追加参数后的函数类型**(传入一个带参数的函数类型和追加的参数类型进去，返回给此函数追加参数后的函数类型)

```typescript
//利用Parameters，ReturnType
type AppendArgs1<F extends (...rest:any[]) => any, A> = (x:A, ...args: Parameters<F>) => ReturnType<F>;
function test(x:Map<number,string>):boolean {
    return true;
}
let appendArgs1:AppendArgs1<typeof test, string> = function(x:string, y:Map<number,string>) { return false; }

//利用infer
type AppendArgs2<F,A> = F extends (...rest: infer P) => infer R ? (x:A, ...rest: P) => R : never;
let appendArgs2:AppendArgs2<typeof test, number> = function(x:number, y:Map<number,string>) {return true;}

```



## 参考

https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

https://stackoverflow.com/questions/50046573/using-readonlymapk-v-type

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases

https://dev.to/busypeoples/notes-on-typescript-recursive-types-and-immutability-5ck1

