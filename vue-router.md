### 路由

通过 `<router-link>` 传参

```js

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 上面的结果为 /user/123 -->


<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

<!-- 带查询参数，上面的结果为 /register?plan=private -->

```

##### 动态路由 

```js

// 动态路径参数 以冒号开头
//path 是路由路径 
//component 是在该路由路径下所使用的组件

{ 
    path: '/user/:id', 
    component: User 
}

```
一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内获取到这个参数值s。

### props 传参

传递静态或动态 `Prop`

```js
<blog-post title="静态参数传递"></blog-post>

//动态参数传递

<blog-post :title="post.title"></blog-post>
```
所有的 `prop` 都使得其父子 `prop` 之间形成了一个**单向下行绑定**：父级 `prop` 的更新会向下流动到子组件中，但是反过来则不行。


### 文档结构

 + `build`  —— webpack 配置文件
 + `config`  ——  vue 配置文件
 + `node_modules` —— 依赖包
 
 + `src` —— 核心文件
    + `assets`  --- 静态资源
    + `components` --- 公共组件
    
        + `service-side` --- 服务端
        + `user-side` --- 用户端
        
    + `router` --- 路由
    + `store` --- 状态管理
    
        + `index.js` --- 组装模块并导出 store 的地方
        + `modules` --- 模块
        
            + `order.js` ---订单模块
            
    + `App.vue` --- 根组件
    + `main.js` --- 入口文件
    
 + `static` —— 静态资源文件
    + `css` --- 样式文件
    + `img` --- 图片
    
 + `.babelrc` —— babel 编译参数
 + `.editorconfig` —— 代码格式
 + `.gitignore` —— git 上传忽略文件配置
 + `.postcssrc.js` —— 转换 css 的工具
 + `index.html` —— 主页
 + `package.json` —— 项目基本信息
 + `README.md` —— 项目说明