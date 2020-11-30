
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const dirs = {
    src: "ES6TOES5/*.js",
    dest: "build"
}

gulp.task("build", () => {
    return gulp.src(dirs.src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dirs.dest));
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
}


exports.default = defaultTask