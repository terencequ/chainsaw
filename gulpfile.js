const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const scssFileBlob = 'src/index.scss';
const distFolderPath = 'css';

/**
 * Compile SCSS files to CSS.
 * @return {*}
 */
function buildStyles(){
    return src(scssFileBlob)
        .pipe(sass())
        .pipe(dest(distFolderPath));
}

/**
 * Watch for changes in SCSS files, and run buildStyles() when changes are detected.
 */
function watchTask(){
    watch(['**/**.scss'], buildStyles);
}

/**
 * Otherwise, just run buildStyles().
 * 
 * If 'watch' is included,
 * When running `gulp` in the terminal, run the buildStyles() function first, then watch for changes to
 * run it again everytime SCSS files change.
 */
if(process.argv.includes('watch')){
    exports.default = series(buildStyles, watchTask)
} else {
    exports.default = series(buildStyles)
}
