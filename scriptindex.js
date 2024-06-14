window.addEventListener("scroll", function scroll() {
  let navbar = this.document.getElementById("navbar");
  if (this.window.scrollY > 500) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
