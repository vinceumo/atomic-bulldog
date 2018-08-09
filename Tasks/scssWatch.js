const gulp = require('gulp');
const gutil = require('gulp-util');
const config = require('../package').gulp;

const scssWatch = () => {
    gulp.watch([
        `${config.src.scss}${config.selectors.scss}`,
    ], ['scssBuild']);
    gutil.log(process.version);
    gutil.log("You must be running on node version 6.1.x or higher for the compiler to work. Note: Visual Studio may need to path to your version of node, otherwise it defaults to an older version, Follow this link for more details: https://stackoverflow.com/questions/43849585/update-node-version-in-visual-studio-2017");
};

gulp.task('scssWatch', scssWatch);
module.exports = scssWatch;