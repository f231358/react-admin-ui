
## react-admin-ui

基于creat-react-app + antd + react-router + axios搭建的后台界面框架<br>

方便快捷的开始新项目的开发（适用项目：OA、ERP、CRM、CMS后台等），不用自己再去一个一个install<br>

整个是基于React的技术栈就不多说了，优点就是react的优点，界面UI基于 [antd](http://ant.design/)<br>

1.已经写好了menu，多级菜单，同时配置好了react-router，写好了基本的路由规则 <br>

2.用ant-breadcrumb完成了header的路径导航，单独做了组件Header.jsx（之后要改为传参数更改路径或跟随menu更改路径）<br>

3.做好了userCard<br>

4.ajax用封装axios，并且支持跨域（跨域的方法注释了，在AjaxHelp.js中）<br>

5.主界面（mainpage）用的card<br>

界面如下<br>

![react-admin界面](http://7xqg7e.com1.z0.glb.clouddn.com/ui.PNG)<br>

## Folder Structure

文件目录如下

```
react-admin-ui/
  README.md
  package.json
  public/
    images/
      Adminlogo.png
      profile_72px.png
    index.html
    favicon.ico
  src/
    common/
      AjaxHelp.js
    components/
      Header.jsx
      MyMenu.jsx
      UserCard.jsx
    css/
      index.css
    http/
      api.js
      http.js
    pages/
      test/
        test.jsx
        test2.jsx
        test3.jsx
      MainPage.jsx
    App.js
    App.test.js
    index.js
    registerServiceWorker.js
```

## Available Scripts

进入项目目录中，执行：

### `npm init`

加载项目

### `npm start`

启动项目<br>
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看.

### `npm run build`

编译项目，生成文件在build目录中

### `npm test`

参考create-react-app

### `npm run eject`

参考create-react-app

### `各个框架版本`

发出来避免遇上兼容问题的同志们抓瞎

```js
{
  "name": "react-admin-ui",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-router": "^4.2.0",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "antd": "^3.2.0",
    "axios": "^0.17.1",
    "react-router-dom": "^4.2.2"
  }
}
```


## 注意事项

1.项目默认在index.js中注释掉了registerServiceWorker.js，需要的请自行开启。不知道这个干啥用的[请自行百度](https://www.baidu.com/)


## The End
除了快速搭建后台，其他作用就是给拿到react全家桶一脸懵逼的萌新打个样。
后期会不断更新，star高的话就上个移动版的






