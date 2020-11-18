import postcss from 'gulp-postcss';
import gulp from 'gulp';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const css: gulp.TaskFunction = () => {
  return gulp.src('www/style.css')
  .pipe(postcss([tailwindcss('./tailwind.config.cjs'), autoprefixer]))
  .pipe(gulp.dest('static/css/'));
}

export const watch = () => {
  gulp.watch(['www/*.css', 'tailwind.config.js'], css);
};
export default css;
