//本demo跑起来,你需要克服以下问题:
--软件开发工具包(JDK,SDK,NodeJs)
--环境变量配置(Path))
--开发工具
--插件安装
--项目拉取,本地构建

//软件开发工具包(JDK,SDK,NodeJs)
--npm是nodeJS指令,请先安装nodeJs
--因为涉及到Android 平台和IOS 平台,window电脑用户请先安装JAVA JDK及Android SDK,IOS放以后来

//环境变量配置(Path))
--window用户添加Path环境变量,参考如下:
--本人本地计算机的adb目录C:\Users\Entroyi\AppData\Local\Android\Sdk\platform-tools\platform-tools
--本人本地计算机java bin目录:C:\Program Files\Java\jdk1.8.0_172\bin
--环境变量中  ANDROID_HOME=C:\Users\Entroyi\AppData\Local\Android\Sdk\platform-tools()
--环境变量中  JAVA_HOME=C:\Program Files\Java\jdk1.8.0_172
--环境变量中  Path中添加上面俩个HOME==> %JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;(尽量靠前面位置放)
--cmd窗口指令验证  java -version ; adb  (分开验证)

//插件安装
//安装ionic 和 cordova
npm install -g ionic cordova

//项目初始化 
ionic start yourAPPName type

//type有以下可选:
---tabs : a simple 3 tab layout
---sidemenu: a layout with a swipable menu on the side
---blank: a bare starter with a single page
---super: starter project with over 14 ready to use page designs
---tutorial: a guided starter project

//启动服务,浏览器跑起来查看
ionic serve

//代码构建,基本是做了删除之类想重建下或者拉取别人demo本地构建
ionic build

//添加android平台
ionic cordova platform add android

//移除android平台
ionic cordova platform remove android

//打包一个android debugeApp 玩一玩(上面俩个HOME路径安装错误的话,这里会跑不通)
ionic cordova run android

//ionic的一些现有插件生成指令,可观察项目中的文件夹
ionic g 组件类型 组件名称
---组件名称：随意
---组件类型：component, directive, page, pipe, provider, tabs


//ionic第三方插件添加
ionic cordova plugin add �������
---npm install --save 插件对应的名称
---插件名称可以到Cordova官网查找
---Cordova官网：https://cordova.apache.org/