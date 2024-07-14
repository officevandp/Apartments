var body = document.body;
body.style.overflowX = "hidden";
     var setVhVw = function() {
  var vh = window.innerHeight * 0.01;
  var vw = window.innerWidth * 0.01;

  document.documentElement.style.setProperty('--vh', vh + 'px');
  document.documentElement.style.setProperty('--vw', vw + 'px');
  document.body.style.setProperty('--vh', vh + 'px');
  document.body.style.setProperty('--vw', vw + 'px');
};
window.addEventListener('load', function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'style.css', true);
	xhr.setRequestHeader('Cache-Control', 'no-cache');
	xhr.send();
});
AOS.init();

window.addEventListener('load', setVhVw);
window.addEventListener('resize', setVhVw);



document.addEventListener('DOMContentLoaded', function(){
  var date = new Date();

  var yearAdd = document.querySelector('#copyright');
  if (yearAdd) {
      yearAdd.innerHTML = "&copy; " + date.getFullYear() + " " + yearAdd.textContent;
  } else {
      console.error("Element with id 'copyright' not found.");
  }
  var body = document.body;
  body.style.overflowX = "hidden";
});


