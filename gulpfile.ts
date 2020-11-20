import postcss from 'gulp-postcss';
import gulp from 'gulp';
import babel from 'gulp-babel';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import ts from 'gulp-typescript';
import webpack from 'webpack-stream';

const tsProject = ts.createProject("tsconfigwww.json");

const css: gulp.TaskFunction = () => {
  return gulp.src('www/style.css')
  .pipe(postcss([tailwindcss('./tailwind.config.cjs'), autoprefixer]))
  .pipe(gulp.dest('static/css/'));
}

const typescript: gulp.TaskFunction = () => {
  return gulp.src('www/index.ts')
    .pipe(webpack({
      output: {
        filename: 'index.js',
      },
      module: {
        rules: [
          {
            test: /\.ts/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ]
      },
    }))
    .pipe(gulp.dest("static/js/"));
}

export const watch = () => {
  gulp.watch(['www/*.css', 'tailwind.config.js'], css);
  gulp.watch(['www/*.ts', 'tsconfigwww.json'], typescript);
};

const all = gulp.parallel(typescript, css);

export default all;
