const sliderItems = Array.from(document.querySelectorAll(".carousel-item"));
const shownItemIndex = 3;

console.log({ sliderItems, shownItemIndex });

sliderItems.forEach(function (sliderItem, index) {
  sliderItem.style.setProperty("--progress", index - shownItemIndex);
});
