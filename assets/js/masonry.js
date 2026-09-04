document.addEventListener("DOMContentLoaded", () => {
  // Find grid container that specifically contains .grid-item children (such as project cards)
  const grids = document.querySelectorAll(".grid");
  let targetGrid = null;
  for (const g of grids) {
    if (g.querySelector(".grid-item")) {
      targetGrid = g;
      break;
    }
  }

  if (!targetGrid || typeof window.Masonry !== "function") {
    return;
  }

  const masonry = new window.Masonry(targetGrid, {
    gutter: 10,
    horizontalOrder: true,
    itemSelector: ".grid-item",
  });

  if (typeof window.imagesLoaded === "function") {
    const tracker = window.imagesLoaded(targetGrid);
    if (tracker && typeof tracker.on === "function") {
      tracker.on("progress", () => masonry.layout());
      return;
    }
  }

  masonry.layout();
});
