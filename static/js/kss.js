document.addEventListener("DOMContentLoaded", function(event) {
  kssShowColors();
});

function getCssVar(prefix, value) {
  var htmlStyles = window.getComputedStyle(document.querySelector("#kss-map-colors"));
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
        '<div class="kss-color-item-child" style="background-color: var(' + cssVar +')">' +
        '<div class="kss-color-item-legend">'+
        '<p>color(' + color + ', ' + subValue +')</p>' +
        '<p>' + colorVal + '</p>' +
        '<p>var(' + cssVar +')</p>' +
        '</div>' +
        '</div>';

      kssColorItemBlock.insertAdjacentHTML( 'beforeend', colorItemHtml );
    });
  });
}
