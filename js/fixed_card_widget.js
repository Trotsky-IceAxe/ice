function FixedCardWidget(type,name,index){if(type==="id"){var tempcard=document.getElementById(name);}
else{var tempcard=document.getElementsByClassName(name)[index];}
if(tempcard){if(tempcard.className.indexOf('fixed-card-widget')>-1){RemoveFixedCardWidget();}
else{RemoveFixedCardWidget();CreateQuitBox();tempcard.classList.add('fixed-card-widget');}}}
function CreateQuitBox(){var quitBox=`<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>`
var asideContent=document.getElementById('aside-content');asideContent.insertAdjacentHTML("beforebegin",quitBox)}
function RemoveFixedCardWidget(){var activedItems=document.querySelectorAll('.fixed-card-widget');if(activedItems){for(i=0;i<activedItems.length;i++){activedItems[i].classList.remove('fixed-card-widget');}}
var quitBox=document.getElementById('quit-box');if(quitBox)quitBox.remove();}
RemoveFixedCardWidget()