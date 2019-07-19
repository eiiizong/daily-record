## 模拟 `Function.prototype.bind`

```js
Function.prototype.bind = function() {
  // 保存原函数 func.bind() 中的 func
	var self = this,
      // 获取传入的上下文 func.bind(obj) 中的 obj
	    context = [].shift.call(arguments),
      // 获取传入的剩余参数 func.bind(obj, arg1, arg2) 中的 arg1, arg2
	    args = [].slice.call(arguments);
  // 返回一个新函数 因为 Function.prototype.bind 绑定上下文时不是立即执行 不同于 apply 和 call
	return function() {
    // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
    // 并且组合两次分别传入的参数，作为新函数的参数
		return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
	}
}
```