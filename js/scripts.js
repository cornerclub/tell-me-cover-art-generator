$(function() { $( "#upload" ).draggable();});

img_pos = "0"

function swap() {
  document.getElementById("upload").style.zIndex = img_pos;
  if (img_pos == "0") {img_pos = "2"} else {img_pos = "0"}
}

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.width = "130px";
    image.style.height = "200px";
    $(function() { $( "#output" ).resizable();}); 

    var cover = document.getElementById('cover');
    cover.parentNode.removeChild(cover);
};
