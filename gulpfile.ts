import postcss from 'gulp-postcss';
import gulp from 'gulp';
import babel from 'gulp-babel';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import ts from 'gulp-typescript';
import cleanCSS from 'gulp-clean-css';

const tsProject = ts.createProject("tsconfigwww.json");

const css: gulp.TaskFunction = () => {
  const unoptimized =
    gulp.src('www/style.css')
      .pipe(postcss([tailwindcss('./tailwind.config.cjs'), autoprefixer]));

  let pipe = null;
  if (process.env.NODE_ENV === "production") {
    pipe = unoptimized.pipe(cleanCSS())
  } else {
    pipe = unoptimized;
  }
  return pipe.pipe(gulp.dest('static/css/'));
}

const typescript: gulp.TaskFunction = () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest("static/js"));
}

export const watch: gulp.TaskFunction = () => {
  gulp.watch(['www/*.css', 'tailwind.config.js'], css);
  gulp.watch(['www/*.ts', 'tsconfigwww.json'], typescript);
};

const all = gulp.parallel(typescript, css);

export default all;
