function toggleImage(id) {
    var image = document.getElementById(id);
    image.style.display = image.style.display == "none" ? "block" : "none";
}

function toggleBoth() {
  toggleImage('image1')
  toggleImage('image2')
}