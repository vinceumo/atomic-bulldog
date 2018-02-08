var focusableElements = [
  "a[href]",
  "area[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])'
];
var keyList = {
  tab: 9,
  escape: 27
};

document.addEventListener("DOMContentLoaded", function(event) {
  var burgerButton = document.querySelectorAll("button.burger");

  Array.prototype.forEach.call(burgerButton, function(el, i) {
    var activeBurgerButton = burgerButton[i],
      isNavOpen = activeBurgerButton.classList.contains("is-active"),
      navigationBar = activeBurgerButton.closest(".navigation-bar"),
      navigationItems = activeBurgerButton.closest(".navigation");

    //Toggle mobile nav on click
    activeBurgerButton.addEventListener("click", function() {
      activeBurgerButton.classList.toggle("is-active");
      navigationBar.classList.toggle("is-active");
      navigationItems.classList.toggle("is-active");
      document.querySelectorAll("body")[0].classList.toggle("is-no-scroll");
      isNavOpen = burgerButton[i].classList.contains("is-active");
    });

    //Close mobile nav on keypress esc
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == keyList.escape && isNavOpen) {
        activeBurgerButton.classList.toggle("is-active");
        navigationBar.classList.toggle("is-active");
        navigationItems.classList.toggle("is-active");
        document.querySelectorAll("body")[0].classList.toggle("is-no-scroll");
        activeBurgerButton.focus();
        isNavOpen = burgerButton[i].classList.contains("is-active");
      }

      if (evt.keyCode == keyList.tab && isNavOpen) {
        trapTabKey(navigationBar, evt);
      }
    };
  });
});

function trapTabKey(container, event) {
  var focusable = container.querySelectorAll(focusableElements.join(", "));
  var firstFocusable = focusable[0];
  var lastFocusable = focusable[focusable.length - 1];
  var currentFocusEl = document.activeElement;

  if (event.shiftKey && currentFocusEl === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  } else if (!event.shiftKey && currentFocusEl === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
}
