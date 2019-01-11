const gulp = require("gulp");
const config = require("../package").gulp;

const scssWatch = () => {
  gulp.watch([`${config.src.scss}${config.selectors.scss}`], ["scssBuild"]);
};

gulp.task("scssWatch", scssWatch);
module.exports = scssWatch;
