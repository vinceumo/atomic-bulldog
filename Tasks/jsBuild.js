const gulp = require('gulp');
const bundle = require('gulp-bundle-assets');
const config = require("../package").gulp;

const output = `${config.src.dist}/js`;

const jsBuild = () => {
    return gulp.src('./bundle-config.js')
        .pipe(bundle())
        .pipe(gulp.dest(output));
};

gulp.task('jsBuild', jsBuild);
module.exports = jsBuild;