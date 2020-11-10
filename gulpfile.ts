import * as gulp from 'gulp';
import * as postcss from 'gulp-postcss';
import * as tailwindcss from 'tailwindcss';
import * as autoprefixer from 'autoprefixer';

function css(cb) {
  return gulp.src('www/style.css')
  .pipe(postcss([tailwindcss, autoprefixer]))
  .pipe(gulp.dest('static/css/'));
}

export const watch = () => {
  gulp.watch(['www/*.css', 'tailwind.config.js'], css);
};
export default css;
