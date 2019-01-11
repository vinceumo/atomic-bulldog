$(document).ready(function() {
  kssShowColors();

  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 1200px)");
    mq.addListener(resetMobileNav);
    resetMobileNav(mq);
  }

  $("#kss-search__input").on("focusin", function() {
    $("#kss-search__list").show();
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".kss-search").length) {
      if ($("#kss-search__list").is(":visible")) {
        $("#kss-search__list").hide();
      }
    }
  });

  $(".kss-burger-container").on("click", ".kss-burger", function() {
    $(this).toggleClass("is-active");
    $(".kss-sidebar").toggleClass("is-active");
    $("body").toggleClass("kss-is-no-scroll");
  });

  $(".kss-section").on("click", ".kss-toggle-fullscreen", function() {
    $('.kss-page-container').toggleClass("kss-is-full-width");
  });
});

function kssSearch() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("kss-search__input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("kss-search__list");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function resetMobileNav(mq) {
  if (mq.matches) {
    $(".kss-burger").removeClass("is-active");
    $(".kss-sidebar").removeClass("is-active");
    $("body").removeClass("kss-is-no-scroll");
  }
}

function getCssVar(prefix, value) {
  var htmlStyles = window.getComputedStyle(
    document.querySelector("#kss-map-colors")
  );
  var cssVar = "--" + prefix + "-" + value;
  var cssVarResult = htmlStyles.getPropertyValue(cssVar);

  return cssVarResult;
}

function kssShowColors() {
  var colorVariation = ["base", "dark", "light", "transparent", "contrast"];

  var elements = document.querySelectorAll("#kss-map-colors .kss-color-item");
  Array.prototype.forEach.call(elements, function(el, i) {
    var kssColorItemBlock = el;
    var color = el.getAttribute("data-color");
    var colorPrefix = "color";

    Array.prototype.forEach.call(colorVariation, function(el, i) {
      var subValue = el;
      var value = color + "-" + subValue;
      var colorVal = getCssVar(colorPrefix, value);
      var cssVar = "--" + colorPrefix + "-" + value;
      var colorItemHtml =
        '<div class="kss-color-item-child" style="background-color: var(' +
        cssVar +
        ')">' +
        '<div class="kss-color-item-legend">' +
        "<p>color(" +
        color +
        ", " +
        subValue +
        ")</p>" +
        "<p>" +
        colorVal +
        "</p>" +
        "<p>var(" +
        cssVar +
        ")</p>" +
        "</div>" +
        "</div>";

      kssColorItemBlock.insertAdjacentHTML("beforeend", colorItemHtml);
    });
  });
}
