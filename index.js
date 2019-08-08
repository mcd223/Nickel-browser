function URL(){
    var firstLetters = document.getElementById("search").value;
    if(firstLetters.substring(0,8) === "https://"){
        page();
    }
    else if(firstLetters.substring(0,7) === "http://"){
        page();
    }
    else if(firstLetters.substring(0,4) === "www."){
        document.getElementById("web").src = "http://" + document.getElementById("search").value;    
    }
    else{
        search();
    }
}
function page(){
    document.getElementById("web").src = document.getElementById("search").value; 
}
function search(){
    document.getElementById("web").src = "https://www.google.com/search?hl=en&q=" + document.getElementById("search").value;
}
function urlUpdate(){
    document.getElementById("search").value = document.getElementById("web").src;
}
function rL(){
    var webview = document.getElementById("web");
    webview.reload();
}
function bK(){
    var webview = document.getElementById("web");
    webview.back();
}
function fD(){
    var webview = document.getElementById("web");
    webview.forward();
}
function updateWebviews() {
    var webview = document.getElementById("web");
    webview.style.height = document.documentElement.clientHeight + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
};
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchForm").onsubmit = URL;
    document.getElementById("back").onclick = bK;
    document.getElementById("forward").onclick = fD;
    document.getElementById("reload").onclick = rL;
    document.getElementById("web").onloadstop = urlUpdate;
});
onload = updateWebviews;
window.onresize = updateWebviews;