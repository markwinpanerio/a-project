var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
          baseDir: './'
        },
    })
})

gulp.task('default', ['browserSync', 'sass'], function(){
    gulp.watch('./sass/**/*.scss', ['sass'])
    gulp.watch('./*.html', browserSync.reload)
    gulp.watch('./js/**/*.js', browserSync.reload)
});
