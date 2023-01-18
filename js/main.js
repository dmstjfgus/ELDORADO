window.addEventListener("load", function () {
  /********** Mobile Menu Toggle  **********/
  const Btn = document.querySelector(".navi");
  toggleBtn = (e) => {
    const target = e.currentTarget;
    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      mobileNav.classList.add("active");
    } else {
      mobileNav.classList.remove("active");
    }
  };
  Btn.addEventListener("click", toggleBtn);
});

$("a").click(function () {
  toggleClass(".active-color");
});
