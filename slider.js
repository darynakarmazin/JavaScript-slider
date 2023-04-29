const sliderItems = Array.from(document.querySelectorAll(".carousel-item"));

sliderItems.forEach(function (sliderItems, index) {
  sliderItems.style.setProperty("----progress", index);
});
