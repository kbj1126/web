
var imageSlideIndex = 1;
showImageSlides(imageSlideIndex);

function imageSlideTimer() {
  plusImageSlides(1);
}
//////////////////
var imageTimer = setInterval(imageSlideTimer, 3000);

function plusImageSlides(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);
  showImageSlides(imageSlideIndex += n);
}
///////////////////////////
function currentImageSlide(n){
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);

  showImageSlides(imageSlideIndex = n);
}
/////////////////////////////
function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {imageSlideIndex = 1}
  if (n < 1) {imageSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[imageSlideIndex-1].style.display = 'block';
  dots[imageSlideIndex-1].className += ' active';
}
//////////////////////
document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null,1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null,1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null,3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null,4));




function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
    }
}
//////////////////////////////
function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");

 while(arr.indexOf(name) > -1){
   arr.splice(arr.indexOf(name), 1);
 }

 element.className = arr.join(" ");
}
/////////////////////////////////////////////////////

var reviewSlideIndex = 0;

function reviewSlideTimer() {
  plusReviewSlides(1);
}
/////////////////////////
var reviewTimer = setInterval(reviewSlideTimer, 3000);

function showReviewSlides(n) {
  var i;
  var review_slides = document.getElementsByClassName('review-slide');

  if (n > review_slides.length - 3) {
    reviewSlideIndex = 0;
  }

  if (n < 0) {
    reviewSlideIndex = review_slides.length - 3;
  }

  for (i = 0; i < review_slides.length; i++) {
    removeClass(review_slides[i], 'show');
    removeClass(review_slides[i], 'res-show');
    addClass(review_slides[i], 'hide');
  }

  removeClass(review_slides[reviewSlideIndex], 'hide');
  addClass(review_slides[reviewSlideIndex], 'res-show');
  removeClass(review_slides[reviewSlideIndex+1], 'hide');
  addClass(review_slides[reviewSlideIndex+1], 'show');
  removeClass(review_slides[reviewSlideIndex+2], 'hide');
  addClass(review_slides[reviewSlideIndex+2], 'show');
}
