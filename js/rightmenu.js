console.log("Codes uses GPL Licence")
function setMask(){if(document.getElementsByClassName("rmMask")[0]!=undefined){return document.getElementsByClassName("rmMask")[0];}
mask=document.createElement('div');mask.className="rmMask";mask.style.width=window.innerWidth+'px';mask.style.height=window.innerHeight+'px';mask.style.background='#fff';mask.style.opacity='.0';mask.style.position='fixed';mask.style.top='0';mask.style.left='0';mask.style.zIndex=998;document.body.appendChild(mask);document.getElementById("rightMenu").style.zIndex=19198;return mask;}
function insertAtCursor(myField,myValue){if(document.selection){myField.focus();sel=document.selection.createRange();sel.text=myValue;sel.select();}
else if(myField.selectionStart||myField.selectionStart=='0'){var startPos=myField.selectionStart;var endPos=myField.selectionEnd;var restoreTop=myField.scrollTop;myField.value=myField.value.substring(0,startPos)+myValue+myField.value.substring(endPos,myField.value.length);if(restoreTop>0){myField.scrollTop=restoreTop;}
myField.focus();myField.selectionStart=startPos+myValue.length;myField.selectionEnd=startPos+myValue.length;}else{myField.value+=myValue;myField.focus();}}
let rmf={};rmf.showRightMenu=function(isTrue,x=0,y=0){let $rightMenu=$('#rightMenu');$rightMenu.css('top',x+'px').css('left',y+'px');if(isTrue){$rightMenu.show();}else{$rightMenu.hide();}}
rmf.switchDarkMode=function(){const nowMode=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light'
if(nowMode==='light'){activateDarkMode()
saveToLocal.set('theme','dark',2)
GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode()
saveToLocal.set('theme','light',2)
GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}
typeof utterancesTheme==='function'&&utterancesTheme()
typeof FB==='object'&&window.loadFBComment()
window.DISQUS&&document.getElementById('disqus_thread').children.length&&setTimeout(()=>window.disqusReset(),200)};rmf.yinyong=function(){var e=document.getElementsByClassName("el-textarea__inner")[0],t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value=d.value="> "+getSelection().toString()+"\n\n",e.dispatchEvent(t);console.log(getSelection().toString());document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n";Snackbar.show({text:'为保证最佳评论阅读体验，建议不要删除空行',pos:'top-center',showAction:false,})}
rmf.copyWordsLink=function(){let url=window.location.href
let txa=document.createElement("textarea");txa.value=url;document.body.appendChild(txa)
txa.select();document.execCommand("Copy");document.body.removeChild(txa);Snackbar.show({text:'链接复制成功！快去分享吧！',pos:'top-right',showAction:false});}
rmf.switchReadMode=function(){const $body=document.body
$body.classList.add('read-mode')
const newEle=document.createElement('button')
newEle.type='button'
newEle.className='fas fa-sign-out-alt exit-readmode'
$body.appendChild(newEle)
function clickFn(){$body.classList.remove('read-mode')
newEle.remove()
newEle.removeEventListener('click',clickFn)}
newEle.addEventListener('click',clickFn)}
rmf.copySelect=function(){document.execCommand('Copy',false,null);}
rmf.scrollToTop=function(){document.getElementsByClassName("menus_items")[1].setAttribute("style","");document.getElementById("name-container").setAttribute("style","display:none");btf.scrollToDest(0,500);}
rmf.translate=function(){document.getElementById("translateLink").click();}
rmf.searchinThisPage=()=>{document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString()
document.getElementsByClassName("search")[0].click()
var evt=document.createEvent("HTMLEvents");evt.initEvent("input",false,false);document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(evt);}
rmf.downloadImage=function(imgsrc,name){btf.snackbarShow('正在下载中，请稍后',false,10000)
setTimeout(function(){let image=new Image();image.setAttribute("crossOrigin","anonymous");image.onload=function(){let canvas=document.createElement("canvas");canvas.width=image.width;canvas.height=image.height;let context=canvas.getContext("2d");context.drawImage(image,0,0,image.width,image.height);let url=canvas.toDataURL("image/png");let a=document.createElement("a");let event=new MouseEvent("click");a.download=name||"photo";a.href=url;a.dispatchEvent(event);};image.src=imgsrc;btf.snackbarShow('图片已添加盲水印，请遵守版权协议');rm.downloadimging=false;},"10000");}
document.body.addEventListener('touchmove',function(e){},{passive:false});function popupMenu(){window.oncontextmenu=function(event){if(event.ctrlKey)return true;$('.rightMenu-group.hide').hide();if(document.getSelection().toString()){$('#menu-text').show();}
if(document.getElementById('post')){$('#menu-post').show();}else{if(document.getElementById('page')){$('#menu-post').show();}}
var el=window.document.body;el=event.target;var a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
if(a.test(window.getSelection().toString())&&el.tagName!="A"){$('#menu-too').show()}
if(el.tagName=='A'){$('#menu-to').show()
rmf.open=function(){if(el.href.indexOf("http://")==-1&&el.href.indexOf("https://")==-1||el.href.indexOf("suswhw.top")!=-1){pjax.loadUrl(el.href)}
else{location.href=el.href}}
rmf.openWithNewTab=function(){window.open(el.href);}
rmf.copyLink=function(){let url=el.href
let txa=document.createElement("textarea");txa.value=url;document.body.appendChild(txa)
txa.select();document.execCommand("Copy");document.body.removeChild(txa);}}
if(el.tagName=='IMG'){$('#menu-img').show()
rmf.openWithNewTab=function(){window.open(el.src);}
rmf.click=function(){el.click()}
rmf.copyLink=function(){let url=el.src
let txa=document.createElement("textarea");txa.value=url;document.body.appendChild(txa)
txa.select();document.execCommand("Copy");document.body.removeChild(txa);}
rmf.saveAs=function(){var url=el.src;var filename=url.split("/")[-1];rmf.downloadImage(url,filename);}}else if(el.tagName=="TEXTAREA"||el.tagName=="INPUT"){$('#menu-paste').show();rmf.paste=function(){navigator.permissions.query({name:'clipboard-read'}).then(result=>{if(result.state=='granted'||result.state=='prompt'){navigator.clipboard.readText().then(text=>{console.log(text)
insertAtCursor(el,text)})}else{Snackbar.show({text:'请允许读取剪贴板！',pos:'top-center',showAction:false,})}})}}
let pageX=event.clientX+10;let pageY=event.clientY;let rmWidth=$('#rightMenu').width();let rmHeight=$('#rightMenu').height();if(pageX+rmWidth>window.innerWidth){pageX-=rmWidth+10;}
if(pageY+rmHeight>window.innerHeight){pageY-=pageY+rmHeight-window.innerHeight;}
mask=setMask();window.onscroll=()=>{rmf.showRightMenu(false);window.onscroll=()=>{}
document.body.removeChild(mask);}
$(".rightMenu-item").click(()=>{document.body.removeChild(mask);})
$(window).resize(()=>{rmf.showRightMenu(false);document.body.removeChild(mask);})
mask.onclick=()=>{document.body.removeChild(mask);}
rmf.showRightMenu(true,pageY,pageX);return false;};window.addEventListener('click',function(){rmf.showRightMenu(false);});}
if(!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){popupMenu()}
const box=document.documentElement
function addLongtabListener(target,callback){let timer=0
target.ontouchstart=()=>{timer=0
timer=setTimeout(()=>{callback();timer=0},380)}
target.ontouchmove=()=>{clearTimeout(timer)
timer=0}
target.ontouchend=()=>{if(timer){clearTimeout(timer)}}}
addLongtabListener(box,popupMenu)