1.第一次请求没有cookie
2.浏览器向服务器发送了一个cookie
3.之后每次发送都携带有一个cookie
任意一次请求浏览器都会自己携带cookie向服务器发送请求，所以只需要在服务器端获取设置cookie
res有res.cookie而req对象中没有对cookie进行解析所以不能直接获取可以安装cookie-parser




SESSION
安装express-session
