const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('reload', [], () => {
    browserSync.reload()
})

gulp.task('browser-sync', [], () => {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
    gulp.watch('./components/**', ['reload'])
    gulp.watch('./static/**', ['reload'])
    gulp.watch('./index.html', ['reload'])
})

gulp.task('default', ['browser-sync'], () => {
    console.log('Done.')
})
