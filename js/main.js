function dropdown(index){
    changeIcon(index);
    toggleClass(index);
}
function toggleClass(index){
    var classname = index + "";
    var text = document.getElementsByClassName(classname);
    text[0].classList.toggle("open");
}
function changeIcon(index){
    var icon = index + "";
    document.getElementById(icon).classList.toggle("close-icon");
}