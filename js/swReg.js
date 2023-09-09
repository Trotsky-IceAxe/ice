(async()=>{const $=document.querySelector.bind(document);if('serviceWorker'in navigator){if(Number(window.localStorage.getItem('ChenBlogHelper_Set'))<1){window.localStorage.setItem('ChenBlogHelper_Set',1)
window.stop()
document.innerHTML=""}
navigator.serviceWorker.register(`/sw.js?time=${Math.ceil(Math.random()*10000000000000000000)}`).then(async()=>{if(Number(window.localStorage.getItem('ChenBlogHelper_Set'))<2){setTimeout(()=>{window.localStorage.setItem('ChenBlogHelper_Set',2)
window.location.reload()},500)}}).catch(err=>console.error(`ChenBlogHelperError:${err}`))}})()