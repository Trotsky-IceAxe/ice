function comCount(){let d=loadData('comCount',10)
if(d)document.querySelectorAll('.card_comment').forEach(i=>{i.innerHTML=d;})
else{fetch('https://twikoo.suswhw.top/',{method:"POST",body:JSON.stringify({"event":"COMMENT_GET_FOR_ADMIN","accessToken":"1059857c25a2ce9fba9cff298f4f33ee","per":1,"page":1,}),headers:{'Content-Type':'application/json'}}).then(res=>res.json()).then(data=>{document.querySelectorAll('.card_comment').forEach(i=>{i.innerHTML=data.count;})
document.getElementsByClassName("card_comment").innerText=data.count;saveData('comCount',data.count)})}}
function saveData(name,data){localStorage.setItem(name,JSON.stringify({'time':Date.now(),'data':data}))}
function loadData(name,time){let data=JSON.parse(localStorage.getItem(name));let t=0
if(data!=null)t=Date.now()-data.time
if(t<time*60*1000&&t>0)return data.data;return 0;}
window.addEventListener("pjax:complete",comCount)
window.addEventListener("DOMContentLoaded",comCount)