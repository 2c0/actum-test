// 1 - declaring variables

//var themename = 'phodat';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var eslint = require('gulp-eslint');
var sassLint = require('gulp-sass-lint');
var compass = require('gulp-compass');
//var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');


// Name of workng theme folder



// Sources + Destination variables
var srcRoot = 'source/**/*.*';
var fontsSrc = "source/fonts/**/*.*";
var fontsDest = "www/build/fonts";

var sassSrc = "source/sass/**/*.scss";
var sassDest = "www/build/css"; //example www/wp-content/themes/phodat/build/css

var jsSrc = ["source/js/**/*.js", "!source/js/test/**/*.*"];
var jsDest = "www/build/js"; //example www/wp-content/themes/phodat/build/js

var scriptsName = 'scripts.js';

var jQuerySrc = 'node_modules/jquery/dist/*.*';
var bootstrapSrc = 'node_modules/bootstrap-sass/assets/**/*.*';

var vendorDest = 'www/build/vendor';
//var imagesDest = 'www/wp-content/themes/phodat/assets/images';

/* autoprefixer options */
var autoprefixerOptions = {
    browsers: ['last 3 version', 'last 15 Chrome versions', 'last 15 Firefox versions', 'last 3 Explorer versions', 'last 3 Edge versions', 'last 3 iOS versions']
};


// 2 - creating tasks

//the default task - when user trigger gulp function
gulp.task('default', ['copy-vendor-assets', 'sass-dev', 'scripts-dev', 'watch']);


// main watch task
gulp.task('watch', function () {

    /*browserSync.init({
        open: "external",
        proxy: "phodat.dev/"
        //port: 80
    });*/

    gulp.watch(sassSrc, ['sass-dev']);
    gulp.watch(jsSrc, ['scripts-dev']);
    gulp.watch(srcRoot).on('change', browserSync.reload);
});


gulp.task('sass-dev', function () {
    gulp.src(sassSrc)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([autoprefixer(autoprefixerOptions)]))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(sassDest));
});


gulp.task('scripts-dev', function () {
    gulp.src(jsSrc)
            .pipe(sourcemaps.init())
//        .pipe(babel())
            .pipe(concat(scriptsName))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(jsDest));
});

gulp.task('copy-jquery', function () {
    gulp.src(jQuerySrc).pipe(gulp.dest(vendorDest + '/jquery'));
});

gulp.task('copy-bootstrap', function () {
    gulp.src(bootstrapSrc).pipe(gulp.dest(vendorDest + '/bootstrap'));
});

gulp.task('copy-fonts', function () {
    gulp.src(fontsSrc).pipe(gulp.dest(fontsDest));
});

/* SASS LINT */
gulp.task('sass-lint', function () {
    gulp.src(sassSrc)
            .pipe(sassLint())
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
});

/* ESLINT */
gulp.task('eslint', function () {
    gulp.src(jsSrc)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});


// main copy task
gulp.task('copy-vendor-assets', ['copy-jquery', 'copy-bootstrap', 'copy-fonts']);
