## Set

+ ES6 新的数据结构
+ 类似于数组
+ 成员值唯一，没有重复值

初始化时可以接受一个具有 `iterable` 接口的数据结构作为参数（eg：数组，字符串）

Set内部内部判断两个值相等，其使用的算法类似于精确相等运算符 `===`，但精确相等运算符认为 `NaN` 不等于自身，在Set内部算法认为 `NaN` 等于自身，两个空对象 `{}` 不相等

### 属性和方法

属性：

+ `Set.protoType.constructor` : 构造函数，默认是 `Set` 函数
+ `Set.protoType.size` : 返回 `Set` 实例的成员总数

方法：

操作方法：

+ `Set.protoType.add(value)` : 添加某个值，返回 `Set` 结构本身
+ `Set.protoType.delete(value)` : 删除某个值，返回一个布尔值，`true` 表示删除成功，反之
+ `Set.protoType.has(value)` : 返回一个布尔值，表示该值是否是 `Set` 的成员
+ `Set.protoType.clear()` : 清空所有成员，没有返回值

遍历方法：

+ `Set.protoType.keys()` : 返回键名遍历器
+ `Set.protoType.values()` : 返回键值遍历器
+ `Set.protoType.entries()` : 返回键值对遍历器
+ `Set.protoType.forEach()` : 使用回调函数遍历每个成员

`Set` 的遍历顺序就是插入顺序

`forEach` 方法还可以接受第二个参数，用来绑定 `this`

由于 `Set` 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 `keys` 方法和 `values` 方法的行为完全一致。

## WeakSet

`WeakSet` 与 `Set` 类似，也是不重复的值集合。但有以下两点区别：

+ 成员只能是对象，不能是其他类型
+ WeakSet 中对象都是弱引用，即垃圾回收机制不考虑 WebSet 对该对象的引用

方法：

+ `WeakSet.protoType.add(value)` : 添加一个新成员
+ `WeakSet.protoType.delete(value)` : 清除指定成员
+ `WeakSet.protoType.has(value)` : 返回一个布尔值，表示该值是否是 `WeakSet` 的成员


`WeakSet` 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。

## Map

JavaScript 的对象（Object），本质上是`键值对的集合`（Hash 结构），但是传统上只能用`字符串`当作键

ES6 提供了 `Map` 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，`各种类型的值（包括对象）都可以当作键`。

`Object` 结构提供了 `“字符串—值”` 的对应

`Map` 结构提供了 `“值—值”` 的对应

注意，只有对**同一个对象**的引用，`Map` 结构才将其视为同一个键。这一点要非常小心。

`Map` 的键实际上是跟**内存地址**绑定的，只要内存地址不一样，就视为两个键


属性和方法

+ `Map.protoType.size` : 返回 `Map` 结构的成员总数
+ `Map.protoType.set(key, value)` : 设置键名 `key` 对应的键值为 `value`，然后返回整个 `Map` 结构。如果 `key` 已经有值，则键值会被更新，否则就新生成该键
+ `Map.protoType.get(key, value)` : 读取 `key` 对应的键值，如果找不到 `key`，返回 `undefined`
+ `Map.protoType.has(key)` : 返回一个布尔值，表示某个键是否在当前 `Map` 对象之中
+ `Map.protoType.delete(key)` : 删除某个键，返回 `true`。如果删除失败，返回 `false`
+ `Map.protoType.clear()` : 清除所有成员，没有返回值

遍历方法：

+ `Map.protoType.keys()` : 返回键名遍历器
+ `Map.protoType.values()` : 返回键值遍历器
+ `Map.protoType.entries()` : 返回所有成员的遍历器
+ `Map.protoType.forEach()` : 使用回调函数遍历每个成员

`Map` 的遍历顺序就是插入顺序

`forEach` 方法还可以接受第二个参数，用来绑定 `this`


## WeakMap

`WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合

`WeakMap` 与 `Map` 的区别有两点：

+ `WeakMap` 只接受**对象**作为键名（`null` 除外），不接受其他类型的值作为键名
+ `WeakMap` 的键名所指向的对象，不计入垃圾回收机制


`WeakMap` 与 `Map` 在 `API` 上的区别：

+ 没有遍历操作（即没有 `keys()`、 `values()` 和 `entries()` 方法），也没有 `size` 属性
+ 无法清空，即不支持 `clear` 方法，`WeakMap` 只有四个方法可用：`get()`、`set()`、`has()`、`delete()`