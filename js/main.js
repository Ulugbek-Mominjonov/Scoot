function dropdown(index){
    var id = index + "";
    var text = document.getElementById(id);
    console.log(text);
    text.classList.toggle("open");
}