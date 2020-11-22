// Sidebar positionning
function reposition() {
    var navbar = document.getElementById("side-nav");
    if(navbar == null){
        navbar = document.getElementById("side-nav2");
    }
    var sticky = 150;
    if (window.pageYOffset >= sticky) {
        navbar.classList.remove("at-top")
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("at-top")
    }
}
function selectSectionInView(){
    var y = window.pageYOffset;
    var inView = ""
    var s = document.getElementById("sections");
    var items = s.getElementsByTagName("li");
    for (var i = items.length-1; i >= 0; --i) {
        var ref = items[i].getElementsByTagName("a");
        var rs = document.getElementById(ref[0].id.substr(0, ref[0].id.length-2));
        var sY = rs.offsetTop;
        var sbr = document.getElementById(ref[0].id).parentElement;
        if (y > sY && inView == ""){
            inView = ref[0].innerText
            sbr.classList.add("s-b-sections-in-view");
            sbr.classList.remove("s-b-sections");
        }
        else {
            sbr.classList.remove("s-b-sections-in-view");
            sbr.classList.add("s-b-sections");
        }
    }
    var t = document.getElementById("s-b-title");
    if (inView == ""){
        t.style = "color: #bbb8b8; text-decoration: none; font-size: 20px; padding-left: 5px;";
    }
    else{
        t.style = "color: white; text-decoration: none; font-size: 20px; padding-left: 5px;";
    }
}
function selectSidebarVisibility(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var sidebar = document.getElementById("side-container");
    if (w < h){
        sidebar.style = "display: None";
    }
    else {
        sidebar.style = "display: visible";
    }
}

function searchInLexicon(query) {
    var resultList = [];
    for (lang in ["fr", "en", "es"]){
        //
    }
    return resultList;
}
