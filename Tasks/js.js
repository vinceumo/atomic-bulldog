/// <binding BeforeBuild='scss, bundle' ProjectOpened='watch-scss, scss, watch-js, bundle' />
//SASS config from https://www.sitepoint.com/simple-gulpy-workflow-sass/

const gulp = require('gulp');
const bundle = require('gulp-bundle-assets');

const output = './dist/js';


const jsBuild = () => {
    return gulp.src('./bundle-config.js')
        .pipe(bundle())
        .pipe(gulp.dest(output));
};

gulp.task('jsBuild', jsBuild);
module.exports = jsBuild;