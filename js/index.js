//add toggle function to the bookmarks

const bookmark = document.querySelector('[data-js = "bookmark_checkbox"]');
let toggle = true;

bookmark.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmark.setAttribute("src", "./assets/bookmark_transparent.png");
  } else {
    bookmark.setAttribute("src", "./assets/bookmark_filled.png");
  }
});
