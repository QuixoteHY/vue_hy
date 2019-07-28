

**demo**: [https://taylorchen709.github.io/vue-admin/](https://taylorchen709.github.io/vue-admin/)

# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install --registry=https://registry.npm.taobao.org

 npm install -g node-gyp --registry=https://registry.npm.taobao.org
 npm install --global --production windows-build-tools --registry=https://registry.npm.taobao.org
 npm install --global --production windows-build-tools
npm install node-sass --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build


百度了很久 ，最后 gyp ERR! build error   应该是没有安装什么
解决办法：
主要是windows平台缺少编译环境，
1、先运行： npm install -g node-gyp
2、然后运行：运行 npm install --global --production windows-build-tools 可以自动安装跨平台的编译器：gym注：第二句执行下载好msi文件卡着不懂不安装 ， 手动去对应的目录底下安装一下 在执行一边。
本以为万事大吉  一执行  npm install node-sass --save-dev   悲剧的事情上演了

解决办法：
保存后 删除之前安装失败的包(第一次安装请跳过此步)
npm uninstall node-sass

重新安装
npm install node-sass

```

# Folder structure
* build - webpack config files
* config - webpack config files
* dist - build
* src -your app
    * api
    * assets
    * common
    * components - your vue components
    * mock
    * styles
    * views - your pages
    * vuex
    * App.vue
    * main.js - main file
    * routes.js
* static - static assets

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss

![theme-blue](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/rec-demo.gif)
![theme-green](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/theme-green.png)

# Browser support

Modern browsers and IE 10+.

# License
[MIT](http://opensource.org/licenses/MIT)
