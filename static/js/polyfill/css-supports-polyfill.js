/*! CSS.supports() Polyfill
* https://gist.github.com/codler/03a0995195aa2859465f
* Copyright (c) 2014 Han Lin Yap http://yap.nu; MIT license */
if (!('CSS' in window)) {
	window.CSS = {};
}

if (!('supports' in window.CSS)) {
	window.CSS._cacheSupports = {};
	window.CSS.supports = function(propertyName, value) {
		var key = [propertyName, value].toString();
		if (key in window.CSS._cacheSupports) {
			return window.CSS._cacheSupports[key];
		}

		function cssSupports(propertyName, value) {
			var style = document.createElement('div').style;

			// 1 argument
			if (typeof value == 'undefined') {
				function mergeOdd(propertyName, reg) {
					var arr = propertyName.split(reg);

					if (arr.length > 1) {
						return arr.map(function(value, index, arr) {
							return (index % 2 == 0) ? value + arr[index+1] : '';
						}).filter(Boolean);
					}
				}

				// The regex will do this '( a:b ) or ( c:d )' => ["( a:b ", ")", "(", " c:d )"]
				var arrOr = mergeOdd(propertyName, /([)])\s*or\s*([(])/gi);
				if (arrOr) {
					return arrOr.some(function(supportsCondition) { return window.CSS.supports(supportsCondition); });
				}
				var arrAnd = mergeOdd(propertyName, /([)])\s*and\s*([(])/gi);
				if (arrAnd) {
					return arrAnd.every(function(supportsCondition) { return window.CSS.supports(supportsCondition); });
				}

				// Remove the first and last parentheses
				style.cssText = propertyName.replace('(','').replace(/[)]$/, '');
			// 2 arguments
			} else {
				style.cssText = propertyName + ':' + value;
			}

			return !!style.length;
		}

		return window.CSS._cacheSupports[key] = cssSupports(propertyName, value);
	};
}