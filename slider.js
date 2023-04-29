const slider = {
  items: Array.from(document.querySelectorAll(".carousel-item")),

  currentIndex: 0,

  clickByItem(index) {
    this.currentIndex = index;
    this.render();
  },

  render() {
    this.items.forEach(function (item, index) {
      item.style.setProperty("--progress", index - this.currentIndex);
      item.style.setProperty("--active", index === this.currentIndex ? 1 : 0);

      const opacity =
        (3 * Math.abs(index - this.currentIndex)) / (this.items.length - 1);
      item.style.setProperty(
        "--opacity",
        index === this.currentIndex ? 1 : opacity
      );
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
