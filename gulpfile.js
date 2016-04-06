const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('reload', [], () => {
    browserSync.reload()
})

gulp.task('browser-sync', ['base', 'components', 'index'], () => {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
    gulp.watch('./src/components/**', ['components'])
    gulp.watch('./src/index.html', ['index'])
    gulp.watch('./static/**/*.*', ['reload'])
    gulp.watch('./index.html', ['reload'])
})

gulp.task('index', [], () => {
    gulp
        .src('./src/index.html')
        .pipe(gulp.dest('./'))
})

gulp.task('components', [], () => {
    gulp
        .src('./src/components/**')
        .pipe(gulp.dest('./static/components'))
})

gulp.task('base', [], () => {
    gulp
        .src('./bower_components/**')
        .pipe(gulp.dest('./static/vendor'))
})

gulp.task('default', ['browser-sync'], () => {
    console.log('Done.')
})
