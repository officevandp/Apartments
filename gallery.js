
document.addEventListener('DOMContentLoaded', function(){
    generateGallery();
    generateModalSlides();
});
var imagePaths = [
    "./imgs/interior/rooms/1.png",
    "./imgs/interior/rooms/2.png",
    "./imgs/interior/rooms/3.png",
    "./imgs/restaurant/4.png",
    "./imgs/interior/rooms/5.png",
    "./imgs/interior/rooms/6.jpg",
    "./imgs/restaurant/7.png",
    "./imgs/interior/rooms/8.jpg",
    "./imgs/interior/rooms/9.jpg",
    "./imgs/interior/rooms/10.jpg",
    "./imgs/interior/rooms/11.png",
    "./imgs/interior/rooms/12.png",
    "./imgs/restaurant/13.jpg",
    "./imgs/interior/rooms/14.png",
    "./imgs/interior/rooms/15.png",
    "./imgs/restaurant/16.png",
    "./imgs/interior/rooms/17.jpg",
    "./imgs/interior/rooms/18.png",
    "./imgs/interior/rooms/19.png",
    "./imgs/interior/rooms/20.png",
    "./imgs/interior/rooms/21.jpg",
    "./imgs/interior/rooms/22.png",
    "./imgs/interior/rooms/23.png",
    "./imgs/interior/rooms/24.png",
    "./imgs/interior/rooms/25.png",
    "./imgs/interior/rooms/26.png",
    "./imgs/interior/rooms/27.png",
    "./imgs/interior/rooms/28.png",
    "./imgs/interior/rooms/29.png",
    "./imgs/interior/rooms/30.png",
    "./imgs/interior/rooms/31.png",
    "./imgs/interior/rooms/32.png",
    "./imgs/exterior/1.JPG",
    "./imgs/exterior/2.JPG",
    "./imgs/exterior/3.JPG",
    "./imgs/exterior/4.JPG",
    "./imgs/exterior/5.JPG",
    "./imgs/exterior/6.JPG",
    "./imgs/exterior/7.JPG",
    "./imgs/exterior/8.JPG",
    "./imgs/exterior/9.JPG",
    "./imgs/exterior/10.JPG",
    "./imgs/exterior/11.JPG",
    "./imgs/exterior/12.JPG",
    "./imgs/exterior/13.JPG",
    "./imgs/exterior/14.JPG",
    "./imgs/exterior/15.JPG",
    "./imgs/exterior/16.JPG",
    "./imgs/exterior/17.JPG",
    "./imgs/exterior/18.JPG",
    "./imgs/exterior/19.JPG",
    "./imgs/exterior/20.JPG"
  ];

function openModal() {
    document.getElementById("main-modal").style.display = "block";
    document.getElementById("main-modal").style.width= "100vw";
    if(window.innerWidth > 768){
      document.querySelector(".modal-content").style.width= "50vw";
      document.querySelector(".modal-content").style.height = "60vh";
      document.querySelector(".modal-content").style.marginTop = "12.5vh";
      document.querySelector(".modal-slides").style.height = "50vh";
    }
    else if(window.innerWidth <= 768 && window.innerWidth > 0){
      document.querySelector(".modal-content").style.width= "80vw";
      document.querySelector(".modal-content").style.height = "60vh";
      document.querySelector(".modal-content").style.marginTop = "10vh";
      document.querySelector(".modal-slides").style.height = "60vh";
    }
}

    

function generateGallery() {
    var gallery = document.getElementById("gallery");
    for (var i = 0; i < imagePaths.length; i++) {
      var column = document.createElement("div");
      column.classList.add("column");
      var img = document.createElement("img");
      img.src = imagePaths[i];
      img.classList.add("hover-shadow", "cursor");
      img.setAttribute("onclick", "openModal(); currentSlide(" + (i + 1) + ")");
      column.appendChild(img);
      gallery.appendChild(column);
    }
}

function generateModalSlides() {
    var modalSlides = document.getElementById("modal-slides");
    for (var i = 0; i < imagePaths.length; i++) {
      var slide = document.createElement("div");
      slide.classList.add("modal-slides");
      var numberText = document.createElement("div");
      numberText.classList.add("number-text");
      numberText.textContent = (i + 1) + " / " + imagePaths.length;
      var img = document.createElement("img");
      img.src = imagePaths[i];
      slide.appendChild(numberText);
      slide.appendChild(img);
      modalSlides.appendChild(slide);
    }
}

function closeModal() {
  document.getElementById("main-modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modal-slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}