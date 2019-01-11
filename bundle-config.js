//https://www.npmjs.com/package/gulp-bundle-assets
var lazypipe = require("lazypipe");
var babel = require("gulp-babel");

module.exports = {
  bundle: {
    scriptsBundleMain: {
      scripts: ["./content/js/global.js"],
      options: {
        rev: false, // {(boolean|string|Array)}
        transforms: {
          scripts: lazypipe().pipe(
            babel,
            {
              presets: ["@babel/preset-env"]
            }
          )
        }
      }
    }
  }
};
