## 模拟 `Function.prototype.call`

```js
Function.prototype.call = function(context) {
  if(typeof context === 'object') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  
  var fn = +new Date() + '' + Math.random()
  context[fn] = this
  var args = []
  for(var i = 0; i<arguments.length; i++) {
    args.push('arguments['+i+']')
  }
  var result = eval('context[fn](' + args+ ')')
  delete context[fn]
  return result 
}
```