/*

 2016.7.14,weicracker版权所有
 V：0.0.3v
 联系QQ：283400770；
 电话：17051099994

*/
/*
*tools,框架API文档
*v.a():alert出需要的内容
*v.c():console.log出所需要的内容
*v.e():自动eval()解析数据并在控制台输出
*
*一下有两个参数：第二个参数为1（可选），含有第二个参数，则Alert出所需要的内容，默认为控制台输出
*
*v.o():自动遍历数组或对象，并在控制台输出每一项内容
*v.t():自动判读传入参数的typeof 类型；
*v.r():自动判读传入参数的是否为数组类型；
*v.n():自动判读传入参数的是否为数字类型；
 */

/*
http://www.jb51.net/article/56504.htm
console.log('hello');
console.info('信息');
console.error('错误');
console.warn('警告');
console.dir()可以显示一个对象所有的属性和方法。
console.dirxml()用来显示网页的某个节点（node）所包含的html/xml代码。
console.assert()用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常
console.trace()用来追踪函数的调用轨迹。
console.time()和console.timeEnd()，用来显示代码的运行时间。
console.profile()的性能分析
//组信息
console.group("第一组信息");
　　console.log("第一组第一条:我的XX(http://www.jb51.net)");
　　console.log("第一组第二条:xxx(http://jb51.net)");
console.groupEnd();
console.group("第二组信息");
　　console.log("第二组第一条:程序爱好者QQ群： 80535344");
　　console.log("第二组第二条:欢迎你加入");
console.groupEnd();
 */
(function(window){
 	var F = function(){};
 	F.prototype = {
	 	a:function(data){
			alert(data);
		},
		c:function(data){
			console.info("您要查询的log数据为：");
			console.log(data);
			console.info("您要查询的对象所有属性为：");
			console.dir(data);
		},
		o:function(objectdata){
			for(var i=0;i<objectdata.length;i++){
				console.info("您要查询的对象第"+i+"个值为：");
				console.log(objectdata[i]);
			}
		},
		t:function(valdata,chose){
			if(chose==1){
				alert("typeof属性为:"+typeof valdata);
			}else{
				console.info("您要查询的对象typeof属性为：");
				console.log(typeof valdata);
			}
		},
		r:function(arraydata,chose){
			if(chose==1){
				alert("数组？："+(arraydata instanceof Array));
			}else{
				console.info("您要查询对象是否是<数组>的布尔值为：");
				console.log(arraydata instanceof Array);
			}
		},
		n:function(number,chose){
			if(chose==1){
				alert("数字、数字字符串？："+!isNaN(number))
			}else{
				console.info("您要查询对象是否是<数字或数字字符串>的布尔值为：");
				console.log(!isNaN(number));
			}
		},
		e:function(objectdata){
			if(typeof objectdata =="object"){
				console.info("您输入的数据不需要解析,已经是object类型");
			}else{
				var obj = eval("("+objectdata+")");
				console.log(obj);
			}
		},
 	}
 	var tools = new F();
 	window.v = tools;
})(window);