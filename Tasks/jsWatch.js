const gulp = require("gulp");
const config = require("../package").gulp;

const jsWatch = () => {
  gulp.watch(`${config.src.js}${config.selectors.js}`, ["jsBuild"]);
};

gulp.task("jsWatch", jsWatch);
module.exports = jsWatch;
