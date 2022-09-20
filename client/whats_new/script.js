const navigationItems = document.querySelectorAll(".nav-items");

navigationItems.forEach(function (item) {
  var handleHover = function () {
    navigationItems[0].firstElementChild.classList.toggle("current");
  };

  item.addEventListener("mouseover", handleHover);
  item.addEventListener("mouseout", handleHover);
});
