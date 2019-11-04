const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const gulpSass = require("gulp-sass");
const gulpPug = require("gulp-pug");
const del = require("del");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "dist/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function clean() {
  return del(["dist"]);
}

function pug() {
  return gulp
    .src("src/layouts/*.pug")
    .pipe(
      gulpPug({
        pretty: true
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browsersync.stream());
}

function sass() {
  return gulp
    .src("src/sass/main.scss")
    .pipe(gulpSass())
    .pipe(gulp.dest("dist/css/"))
    .pipe(browsersync.stream());
}

function scripts() {
  return gulp
    .src("src/scripts/*.js")
    .pipe(gulp.dest("dist/js/"))
    .pipe(browsersync.stream());
}

function assets() {
  return gulp
    .src("src/assets/*")
    .pipe(gulp.dest("dist/assets/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("src/sass/*", sass);
  gulp.watch("src/layouts/*", pug);
  gulp.series(browserSyncReload);
}
gulp.task("pug", pug);
gulp.task("sass", sass);
gulp.task("assets", assets);
gulp.task("scripts", scripts);

gulp.task("default", gulp.parallel(clean, pug, sass, scripts, assets));

gulp.task("watch", gulp.parallel(watchFiles, browserSync));
