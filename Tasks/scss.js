/// <binding BeforeBuild='scss, bundle' ProjectOpened='watch-scss, scss, watch-js, bundle' />
//SASS config from https://www.sitepoint.com/simple-gulpy-workflow-sass/

const gulp = require('gulp');
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const purgeSourcemaps = require('gulp-purge-sourcemaps');

const inputScss = "./content/scss/**/*.scss"; /*watches sub folders inside sass folder */
const output = "./dist/css";

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

const scssBuild = () => {
    return gulp
        .src(inputScss)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output))
        .pipe(purgeSourcemaps())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cleanCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(output));
};

gulp.task('scssBuild', scssBuild);
module.exports = scssBuild;