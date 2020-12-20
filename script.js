window.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  const currentScroll = window.pageYOffset;
   
  if (currentScroll > 150) {
    // down
    navbar.classList.add("transparent-navbar");
  } else {
    // up
    navbar.classList.remove("transparent-navbar");
  }
});