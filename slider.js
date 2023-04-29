const slider = {
  items: Array.from(document.querySelectorAll(".carousel-item")),

  currentIndex: 0,

  clickByItem(index) {},

  render() {
    this.items.forEach(function (item, index) {
      item.style.setProperty("--progress", index - this.currentIndex);
      item.style.setProperty("--active", index === this.currentIndex ? 1 : 0);
    }, this);
  },

  init() {
    this.items.forEach(function (item, index) {
      item.addEventListener("click", this.clickByItem.bind(this, index));
    }, this);
    this.render();
  },
};

slider.init();
