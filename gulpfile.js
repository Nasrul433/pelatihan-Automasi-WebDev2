const gulp = require("gulp");
const prettier = require("gulp-prettier”);
                         
function percantikKode() {
return src(["./**/*", "!node_modules/**/*"]).pipe(prettier()).pipe(dest("."));
  
  exports.default = percantikKode;
