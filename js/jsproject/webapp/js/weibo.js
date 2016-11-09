//加载 视图
var get = {

	byTagName: function(element, name) {
		return(element || document).getElementsByTagName(name);
	},

	byId: function(id) {
		return typeof id === "string" ? document.getElementById(id) : id
	},

	byClass: function(sClass, oParent) {
		var aClass = [];
		var reClass = new RegExp("(^| )" + sClass + "( |$)");
		var aElem = this.byTagName(oParent, "*");
		for(var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass
	}

};

var Eventhandle = {
	addHandler: function(oElement, sEvent, fnHandler) {
		oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : (oElement["_" + sEvent + fnHandler] = fnHandler, oElement[sEvent + fnHandler] = function() {
			oElement["_" + sEvent + fnHandler]()
		}, oElement.attachEvent("on" + sEvent, oElement[sEvent + fnHandler]))
	},

	removeHandler: function(oElement, sEvent, fnHandler) {
		oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, oElement[sEvent + fnHandler])
	},

	loadHandler: function(loadCallback) {
		this.addHandler(window, 'load', loadCallback);
	}
};
// 设置  css 属性的， 其内部还是 修改 style
function css(obj, attr, value) {
	switch(arguments.length) {
		case 2:
			if(typeof arguments[1] == "object") {
				for(var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")", obj.style[i] = attr[i] / 100) : obj.style[i] = attr[i];
			} else {
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
			}
			break;
		case 3:
			attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : obj.style[attr] = value;
			break;
	}

}

Eventhandle.loadHandler(function() {
	var himg = get.byTagName(get.byId('face'), 'img');

	//图片点击时效果, 鼠标滑动效果
	for(var i = 0; i < himg.length; i++) {
		himg[i].onmouseover = function() {
			this.className += ' hover';
		}

		himg[i].onmouseout = function() {
			this.className = this.className.replace(/\s?hover/, "");
		}

		himg[i].onclick = function() {
			for(var j = 0; j < himg.length; j++) himg[j].className = "";
			this.className = "current";
		}
	}

	// 下面是输入框的处理
	var vBox = get.byId('msgBox');
	var vInputEd = get.byClass("f-text", vBox);

	for(var i = 0; i < vInputEd.length; i++) {
		Eventhandle.addHandler(vInputEd[i], 'focus', function() {
			this.className = 'active';
		});

		Eventhandle.addHandler(vInputEd[i], 'blur', function() {
			this.className = '';
		});
	}

	// 处理下面列表
	// 滑动效果
	var vListDiv = get.byClass("list")[0];
	var vLi = get.byTagName(vListDiv, "li");
	var oUl = get.byTagName(vListDiv, "ul")[0];
	var oTmp;
	// ==== 这个方法有问题，调用
	// i 判断少了个
	function showLiTouch() {
		for(var i = 0; i < vLi.length; i++) {
			//li鼠标划过样式
			Eventhandle.addHandler(vLi[i], "mouseover", function() {
				this.className = "hover";
				var vDel = get.byClass("del", get.byClass('times', this)[0])[0];
				vDel.style.display = "block";

			});

			// li
			Eventhandle.addHandler(vLi[i], "mouseout", function() {
				this.className = "";
				var vDel = get.byClass("del", get.byClass('times', this)[0])[0];
				vDel.style.display = "none";
			});

		}
	}

	showLiTouch();

	// ===  ==== 这个方法有问题，调用 end

	// 处理下面列表删除功能，滑动效果，
	var timer;
	var aA = get.byClass("del", oUl);

	function delLi() {
		for(var i = 0; i < aA.length; i++) {
			aA[i].onclick = function() {
				var oParent = this.parentNode.parentNode.parentNode;
				var alpha = 100;
				var iHeight = oParent.offsetHeight;
				//				alert(iHeight);
				timer = setInterval(function() {
					css(oParent, "opacity", (alpha -= 10));
					if(alpha < 0) {
						clearInterval(timer);
						timer = setInterval(function() {
							iHeight -= 10;
							iHeight < 0 && (iHeight = 0);
							css(oParent, "height", iHeight + "px");
							iHeight == 0 && (clearInterval(timer), oUl.removeChild(oParent))
						}, 30)
					}
				}, 30);
				this.onclick = null
			};
		}
	}
	delLi();

	//处理 新增时，
	var vSend = get.byId('sendBtn');
	Eventhandle.addHandler(vSend, "click", function() {
		sendInfo();
	});

	//格式化时间, 如果为一位数时补0
	function format(str) {
		return str.toString().replace(/^(\d)$/, "0$1")
	}

	function sendInfo() {
		var vTextArea = get.byId('conBox');
		var vTextName = get.byId('userName');
		var cTextData = vTextArea.value;
		var cTextName = vTextName.value;

		//构造数据 HTML数据
		var oLi = document.createElement("li");
		var oDate = new Date();
		oLi.innerHTML = "<div class=\"userPic\"><img src=\"" + get.byClass("current", get.byId("face"))[0].src + "\"></div>\
							 <div class=\"content\">\
							 	<div class=\"userName\"><a href=\"javascript:;\">" + cTextName + "</a>:</div>\
								<div class=\"msgInfo\">" + cTextData.replace(/<[^>]*>|&nbsp;/ig, "") + "</div>\
								<div class=\"times\"><span>" + format(oDate.getMonth() + 1) + "\u6708" + format(oDate.getDate()) + "\u65e5 " + format(oDate.getHours()) + ":" + format(oDate.getMinutes()) + "</span><a class=\"del\" href=\"javascript:;\">\u5220\u9664</a></div>\
							 </div>";

		//开始添加到界面上 -
		vLi.length ? oUl.insertBefore(oLi, vLi[0]) : oUl.appendChild(oLi);
		//直接添加没有动画效果，添加动画效果
		//将元素高度保存
		var iHeight = oLi.clientHeight - parseFloat(css(oLi, "paddingTop")) - parseFloat(css(oLi, "paddingBottom")); // 添加的元素

		var alpah = count = 0;
		css(oLi, {
			"opacity": "0",
			"height": "0"
		});

		var timer = setInterval(function() {
			//动态修改高度，
			css(oLi, {
				"display": "block",
				"opacity": "0",
				"height": (count += 8) + "px"
			});
			if(count > iHeight) { //高度到了，就取消定时器，不再添加了，
				clearInterval(timer);
				css(oLi, "height", iHeight + "px");
				// 再开一个定时器，透明度的
				timer = setInterval(function() {
					css(oLi, "opacity", (alpah += 10));
					//透明度够了
					//当大于100了，就开始执行后面的操作，
					alpah > 100 && (clearInterval(timer), css(oLi, "opacity", 100));
				}, 30)
			}
		}, 30); //每隔30ms要做啥事情，

	}

});