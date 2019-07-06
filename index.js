function search(){
    document.getElementById("web").src = document.getElementById("search").value; 
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
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchForm").onsubmit = search;
    document.getElementById("back").onclick = bK;
    document.getElementById("forward").onclick = fD;
    document.getElementById("reload").onclick = rL;
    document.getElementById("web").onloadstop = urlUpdate;
});