//1. PC - js

//����ָ����Χ�������(m-n֮��)�Ĺ�ʽ
Math.random()*(n-m)+m
return false
return false
// event.preventDefault()���赲Ԥ��Ҫ�������¼�.
// event.stopPropagation()���赲����ð���¼�.
// ��return false����ǰ�����ߵ���������������
// ������event.preventDefault();
// ������event.stopPropagation();
// ֹͣcallback function��ִ�в�������return����
//��ֹ��IframeǶ��
if(top != self){
    location.href = ��about:blank��;
}
//����ͼƬlazy���صķ�ʽ ��һ��By JS�м�����Ⱥ �ɶ�-���� �ڶ���By �Ϻ�-zenki
// @description ׼��ΪͼƬԤ����ʹ�õĲ��
// ʹ�õ�ͼƬ����css����Ϊlazy-load-wrap
// ͼƬ��ʵ��ַΪdata-lazy-src
// ��lazy-load-wrap���������ӿڣ���ʼ�滻������������Ҫ�ӳټ��ص�ͼƬ·���������������ļ���״̬
//��һ�ַ���
$.fn.compassLazyLoad=function(){
    var _HEIGHT=window.innerHeight,
    _lazyLoadWrap=$('.lazy-load-wrap');

    var methods={
        setOffsetTop:function(){
            $.each(_lazyLoadWrap,function(i,n){
                $(n).attr({
                    'top':n.offsetTop-_HEIGHT,
                    'status':'wait'
                });
            })
        },
        isShow:function(){
            var _scrollTop=$(window).scrollTop;
            //����image�����ж��Ƿ�����ӿڣ�����image����
            $.each(_lazyLoadWrap,function(){
                var _that=$(this);
                if (_that.attr('status')==='done') {
                    return;
                };
                if (_that.attr('top')<=_scrollTop) {
                    _that.find('img[data-lazy-src]').each(function(i,n){
                        n.src=$(n).data('lazy-src');
                    });
                    _that.attr('status','done');
                };
            })
        },
        scroll:function(){
            $(window).on('scroll',function(){
                methods.isShow();
            });
        },
        init:function(){
            methods.setOffsetTop();
            methods.isShow();
            methods.scroll();
        }
    };
    methods.init();

}


//�ڶ��ַ���

var exist=(function($){
    var timer=null,
    temp=[].slice.call($('.container'));
    ret={};

    for(var i=0,len=temp.length-1;i<=len;i++){
        ret[i]=temp[i];
    }
    var isExist=function(winTop,winEnd){
        for(var i in ret){
            console.log(ret);
            var item=ret[i],
            eleTop=item.offsetTop,
            eleEnd=eleTop+item.offsetHeight;

            if((eleTop>winTop&&eleTop<=winEnd)||(eleEnd>winTop&&eleEnd<=winEnd)){
                $(item).css('background','none');
                new Tab($(item).attr('id'),data).init;
                delete ret[i];
            }
        }
    }
    return {
        timer:timer;
        isExist:isExist;
    };
})($);



//�����ַ���
Zepto(function ($) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    (function lazyLoad() {
        var imgs = $(".lazyLoad");
        var src = '';
        $.each(imgs, function (index, item) {
            src = $(item).attr('data-src');
            $(item).attr('src', src);
        });
    })();
});
$(function () {
    var lazyLoadTimerId = null;
    /// ���ܼ����¼�
    $(window).bind("scroll", function () {
        clearTimeout(lazyLoadTimerId);
        lazyLoadTimerId = setTimeout(function () {
            // �ӳټ�������ͼƬ
            var isHttp = (location.protocol === "http:");
            $("#ym_images img").each(function () {
                var self = $(this);
                if (self.filter(":above-the-fold").length > 0) {
                    var originUrl = self.attr("data-original");
                    self.attr("src", originUrl);
                }
            });
        }, 500);
    });
});
//ĳ��ĳ�µ�1��Ϊ���ڼ�
var weekday = ["������", "����һ", "���ڶ�", "������", "������", "������", "������"];
weekday[new Date(2015, 9, 1).getDay()]; //2015��10��1��
2. Mobile - js

//js �ж�IOS, ��׿
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android�ն˻���uc�����
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�
alert('�Ƿ���Android��'+isAndroid);
alert('�Ƿ���iOS��'+isiOS);
//3. ΢�� weixin

//UserAgent �ж�΢�ſͻ���
// Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI
function isWechat() {  
    var ua = navigator.userAgent.toLowerCase();
    return /micromessenger/i.test(ua) || /windows phone/i.test(ua);
}
//JS�ӿڰ�ȫ��������д������onMenuShareAppMessageֱ�ӻ�ȡĬ��ֵ��
// ����onMenuShareAppMessageֱ�ӻ�ȡĬ��ֵ
//�رյ�ǰҳ��
WeixinJSBridge.call('closeWindow');
//֧���ӿڷ������ñ�����addevent��ߵ���
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
    that.initOrder();
}, false);
//֧���ӿڷ������ñ�����
WeixinJSBridge.invoke('getBrandWCPayRequest', d, function(res){
    if(res.err_msg == "get_brand_wcpay_request:ok"){
        // alert("֧���ɹ�");
        // union.release(d.orderId);
        resetUrl();
        paySuccess('home', d.orderId);
    } else {
        cancelOrder(d.orderId);
        // alert(res.err_msg);
    }
    loading.hide();
});
//�ٲ������޼���ʵ��
// be dependent on jquery & jquery.infinitescroll.min.js
// insert this '<div id="more"><a href="api?page="></a></div>' to your page.html
(function($){
  $(function(){
      var $container = $('.list-wrap-gd');
      function layOutCallBack() {
          $container.imagesLoaded(function(){
              $container.masonry({
                  itemSelector: '.item-bar',
                  gutter: 10
              });
          });
          $container.imagesLoaded().progress( function() {
              $container.masonry('layout');
          });
      }

      layOutCallBack();

      $container.infinitescroll({
          navSelector : "#more",
          nextSelector : "#more a",
          itemSelector : ".item-bar",
          pixelsFromNavToBottom: 300,
          loading:{
              img: "/images/masonry_loading.gif",
              msgText: ' ',
              finishedMsg: "<em>�Ѿ������һҳ</em>",
              finished: function(){
                  $("#more").remove();
                  $("#infscr-loading").hide();
              }
          },
          errorCallback:function(){
              $(window).unbind('.infscr');
          },
          pathParse: function (path, nextPage) {
              var query = "";
              var keyword=$("#search_keyword").val();
              var cat_id=$("#cat_id").val();
              var brand_id=$("#brand_id").val();
              var country_id = $("#country_id").val();
              query = query + "&namekeyword="+keyword;
              query = query +"&cat_id="+cat_id
              query = query + "&brand_id=" + brand_id; 
              query = query + "&country_id=" + country_id;
              path = [path,query];
              return path;
          }
      },

      function(newElements) {
          var $newElems = $( newElements ).css({ opacity: 0 });
          $newElems.imagesLoaded(function(){
              $newElems.animate({ opacity: 1 });
              $container.masonry( 'appended', $newElems, true );
              layOutCallBack();
          });
      });
  });
})(jQuery);
//iOS��Safari�������input�ȱ�focus��fixedԪ�ش�λ����
if( /iPhone|iPod|iPad/i.test(navigator.userAgent) ) {
  $(document).on('focus', 'input, textarea', function()
  {
     $('header').css("position", 'absolute');
     $('footer').css("position", 'absolute');

  });

  $(document).on('blur', 'input, textarea', function()
  {
       $('header').css("position", 'fixed');
       $('footer').css("position", 'fixed');

  });
} 
//�õ�����λ��
function getLocation(callback){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
              function(p){
                  callback(p.coords.latitude, p.coords.longitude);
              },
              function(e){
                  var msg = e.code + "\n" + e.message;
              }
      );
  }
}
//rem��������
(function(doc, win){
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function(){
          var clientWidth = docEl.clientWidth;
          if(!clientWidth) return;
          docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      };

  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//����һ��rem����
var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
rem = docEl.clientWidth * 2 / 10;
scale = 1 / dpr;


// ����viewport���������ţ��ﵽ����Ч��
metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

// ����data-dpr���ԣ�������css hack֮��
docEl.setAttribute('data-dpr', dpr);

// ��̬д����ʽ
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

// ��js���õģ�ĳһdpr��rem��px֮���ת������
window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
};

window.dpr = dpr;
window.rem = rem;
//��ȡjs����·��
function getJsDir (src) {
    var script = null;

    if (src) {
        script = [].filter.call(document.scripts, function (v) {
            return v.src.indexOf(src) !== -1;
        })[0];
    } else {
        script = document.scripts[document.scripts.length - 1];
    }

    return script ? script.src.substr(0, script.src.lastIndexOf('/')) : script;
}
//��ȫ�ֲ������
window.onerror = function (errMsg, scriptURI, lineNumber, columnNumber, errorObj) {
    setTimeout(function () {
        var rst = {
            "������Ϣ��": errMsg,
            "�����ļ���": scriptURI,
            "�����кţ�": lineNumber,
            "�����кţ�": columnNumber,
            "�������飺": errorObj
        };

        alert(JSON.stringify(rst, null, 10));
    });
};
//���ͨ�� js �޸�΢���������title?
var $body = $('body');
document.title = 'title'; // hack��΢�ŵ�webview���޷��޸�document.title�����    
var $iframe = $('<iframe src="/favicon.ico"></iframe>').on('load', function(){ 
    setTimeout(function(){ 
        $iframe.off('load').remove() 
    }, 0) 
}).appendTo($body)
//1. ���÷��� - js

//�ַ������Ƚ�ȡ
function cutstr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/��
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + "..."
}
//�滻ȫ��
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
}
//����ո�
String.prototype.trim = function() {
    var reExtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reExtraSpace, "$1")
}
//�����ո�/�ҿո�
function ltrim(s){ return s.replace( /^(\s*|��*)/, ""); } 
function rtrim(s){ return s.replace( /(\s*|��*)$/, ""); }
//�ж��Ƿ���ĳ���ַ�����ͷ
String.prototype.startWith = function (s) {
    return this.indexOf(s) == 0
}
//�ж��Ƿ���ĳ���ַ�������
String.prototype.endWith = function (s) {
    var d = this.length - s.length;
    return (d >= 0 && this.lastIndexOf(s) == d)
}
//ת��html��ǩ
function HtmlEncode(text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}
//ʱ�����ڸ�ʽת��
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['��', 'һ', '��', '��', '��', '��', '��'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str
}
//�ж��Ƿ�Ϊ��������
function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}
//����cookieֵ
function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
}
//��ȡcookieֵ
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}
//������ʽ�ļ���
function LoadStyle(url) {
    try {
        document.createStyleSheet(url)
    } catch(e) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(cssLink)
    }
}
//���ؽű�����
function evalscript(s) {
    if(s.indexOf('<script') == -1) return s;
    var p = /<script[^\>]*?>([^\x00]*?)<\/script>/ig;
    var arr = [];
    while(arr = p.exec(s)) {
        var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
        var arr1 = [];
        arr1 = p1.exec(arr[0]);
        if(arr1) {
            appendscript(arr1[1], '', arr1[2], arr1[3]);
        } else {
            p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
            arr1 = p1.exec(arr[0]);
            appendscript('', arr1[2], arr1[1].indexOf('reload=') != -1);
        }
    }
    return s;
}
//����ű�����
function stripscript(s) {
    return s.replace(/<script.*?>.*?<\/script>/ig, '');
}
//��̬���ؽű��ļ�
function appendscript(src, text, reload, charset) {
    var id = hash(src + text);
    if(!reload && in_array(id, evalscripts)) return;
    if(reload && $(id)) {
        $(id).parentNode.removeChild($(id));
    }

    evalscripts.push(id);
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset : (BROWSER.firefox ? document.characterSet : document.charset);
    try {
        if(src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function () {
                scriptNode.onloadDone = true;
                JSLOADED[src] = 1;
             };
             scriptNode.onreadystatechange = function () {
                 if((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    JSLOADED[src] = 1;
                }
             };
        } else if(text){
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch(e) {}
}
//���ذ�ID������Ԫ�ض���
function $(id) {
    return !id ? null : document.getElementById(id);
}
//����URL�����Ƿ���Ч
function getUrlState(URL){ 
    var xmlhttp = new ActiveXObject("microsoft.xmlhttp"); 
    xmlhttp.Open("GET",URL, false);  
    try{  
            xmlhttp.Send(); 
    }catch(e){
    }finally{ 
        var result = xmlhttp.responseText; 
        if(result){
            if(xmlhttp.Status==200){ 
                return(true); 
             }else{ 
                   return(false); 
             } 
         }else{ 
             return(false); 
         } 
    }
}
//��ȡ��ǰ·��
var currentPageUrl = "";
if (typeof this.href === "undefined") {
    currentPageUrl = document.location.toString().toLowerCase();
}else {
    currentPageUrl = this.href.toString().toLowerCase();
}
//��ȡҳ��߶�
function getPageHeight(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
                    ? a
                    : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
//��ȡҳ����ӿ��
function getPageViewWidth(){
    var d = document, a = d.compatMode == "BackCompat" ? 
                       d.body: d.documentElement;
    return a.clientWidth;
}
//��ȡҳ����
function getPageWidth(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"?
                          a: g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
//�����ʱ���
function uniqueId(){
    var a=Math.random,b=parseInt;
    return Number(new Date()).toString()+b(10*a())+b(10*a())+b(10*a());
}
//���ڸ�ʽ������
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
(this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o){
        if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
    }
    return format;
}
//����
//new Date().format("yyyy-MM-dd hh:mm:ss");
//���ض�����ͨ�÷���
function backTop(btnId) {
    var btn = document.getElementById(btnId);
    var d = document.documentElement;
    var b = document.body;
    window.onscroll = set;
    btn.style.display = "none";
    btn.onclick = function() {
        btn.style.display = "none";
        window.onscroll = null;
        this.timer = setInterval(function() {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
            }, 10);
    };
    function set() {
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
    }
};
backTop('goTop');
//���URL��GET����ֵ
// �÷��������ַ�� test.htm?t1=1&t2=2&t3=3, ��ô��ȡ�ã�GET["t1"], GET["t2"], GET["t3"]
function get_get(){ 
    querystr = window.location.href.split("?")
    if(querystr[1]){
        GETs = querystr[1].split("&");
        GET = [];
        for(i=0;i<GETs.length;i++){
              tmp_arr = GETs.split("=")
              key=tmp_arr[0]
              GET[key] = tmp_arr[1]
        }
    }
    return querystr[1];
}
//����ȥ��
String.prototype.unique=function(){
    var x=this.split(/[\r\n]+/);
    var y='';
    for(var i=0;i<x.length;i++){
        if(!new RegExp("^"+x.replace(/([^\w])/ig,"\\$1")+"$","igm").test(y)){
            y+=x+"\r\n"
        }
    }
    return y
};
//���ֵ�˳�򣬶�ÿ�н�����������
function SetSort(){
    var text=K1.value.split(/[\r\n]/).sort().join("\r\n");//˳��
    var test=K1.value.split(/[\r\n]/).sort().reverse().join("\r\n");//����
    K1.value=K1.value!=text?text:test;
}
//�ַ����������
function IsReverse(text){
    return text.split('').reverse().join('');
}
//����дת������
//��ʽת��
function transform(tranvalue) {
    try {
        var i = 1;
        var dw2 = new Array("", "��", "��"); //��λ
        var dw1 = new Array("ʰ", "��", "Ǫ"); //С��λ
        var dw = new Array("��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"); //����������
        //������Сдת���ɴ�д��ʾ�ںϼƴ�д���ı�����     
        //����������С��
        var source = splits(tranvalue);
        var num = source[0];
        var dig = source[1];
        //ת����������
        var k1 = 0; //��С��λ
        var k2 = 0; //�ƴ�λ
        var sum = 0;
        var str = "";
        var len = source[0].length; //�����ĳ���
        for (i = 1; i <= len; i++) {
              var n = source[0].charAt(len - i); //ȡ��ĳ��λ���ϵ�����
              var bn = 0;
              if (len - i - 1 >= 0) {
                bn = source[0].charAt(len - i - 1); //ȡ��ĳ��λ��ǰһλ�ϵ�����
              }
              sum = sum + Number(n);
              if (sum != 0) {
                str = dw[Number(n)].concat(str); //ȡ�ø����ֶ�Ӧ�Ĵ�д���֣������뵽str�ַ�����ǰ��
                if (n == '0') sum = 0;
              }
              if (len - i - 1 >= 0) { //�����ַ�Χ��
                if (k1 != 3) { //��С��λ
                      if (bn != 0) {
                        str = dw1[k1].concat(str);
                      }
                      k1++;
                } else { //����С��λ���Ӵ�λ
                      k1 = 0;
                      var temp = str.charAt(0);
                      if (temp == "��" || temp == "��") //����λǰû����������ȥ��λ
                      str = str.substr(1, str.length - 1);
                      str = dw2[k2].concat(str);
                      sum = 0;
                }
              }
              if (k1 == 3){ //С��λ��ǧ���λ��һ
                k2++;
              }
        }
        //ת��С������
        var strdig = "";
        if (dig != "") {
              var n = dig.charAt(0);
              if (n != 0) {
                strdig += dw[Number(n)] + "��"; //������
              }
              var n = dig.charAt(1);
              if (n != 0) {
                strdig += dw[Number(n)] + "��"; //������
              }
        }
        str += "Ԫ" + strdig;
    } catch(e) {
        return "0Ԫ";
    }
    return str;
}

//���������С��
function splits(tranvalue) {
    var value = new Array('', '');
    temp = tranvalue.split(".");
    for (var i = 0; i < temp.length; i++) {
        value = temp;
    }
    return value;
}