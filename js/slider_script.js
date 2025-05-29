// // JavaScript File

// // Reference To Buttons
// var btnLeft = document.getElementById("prev_btn");
// var btnRight = document.getElementById("next_btn");
// // var btnLeft = document.querySelectorAll("#prev_btn");
// // var btnRight = document.querySelectorAll("#next_btn");

// // Reference To Slider
// var slider = document.querySelector(".container .slider");
// // var slider = document.querySelectorAll(".container .slider");

// btnRight.addEventListener("click", nextSlide);
// function nextSlide() {
//   slider.appendChild(slider.firstElementChild);
// }

// btnLeft.addEventListener("click", prevSlide);
// function prevSlide() {
//   slider.prepend(slider.lastElementChild);
// }

// // Auto Sliding
// function autoSlide() {
//   deleteInterval = setInterval(timer, 4000); // 4000 mile sec = 4 sec
//   function timer() {
//     nextSlide();
//   }
// }
// autoSlide();

// // Stop Auto Sliding When Mouse is Over
// slider.addEventListener("mouseover", deleteAutoSliding);
// btnRight.addEventListener("mouseover", deleteAutoSliding);
// btnLeft.addEventListener("mouseover", deleteAutoSliding);

// Get all containers
const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  const slider = container.querySelector(".slider");
  const btnLeft = container.querySelector(".prev_btn");
  const btnRight = container.querySelector(".next_btn");

  // Skip this container if required elements aren't found
  if (!slider || !btnLeft || !btnRight) return;

  // Slide Functions
  function nextSlide() {
    if (slider.firstElementChild) {
      slider.appendChild(slider.firstElementChild);
    }
  }

  function prevSlide() {
    if (slider.lastElementChild) {
      slider.prepend(slider.lastElementChild);
    }
  }

  // Auto Slide
  let autoSlideInterval = setInterval(nextSlide, 4000);

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event Listeners
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  slider.addEventListener("mouseover", stopAutoSlide);
  btnRight.addEventListener("mouseover", stopAutoSlide);
  btnLeft.addEventListener("mouseover", stopAutoSlide);
});
