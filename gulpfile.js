"use strict";
const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const run = require("gulp-run");

// Variaves de definição
const libsJsPath = "./source/js/libs/**/*.js";
const jsPath = "./source/js/";
const jsOutFileName = "main.js";
const scssPath = "./source/style/scss/**/*.scss";
const cssPath = "./source/style/";
const cssOutFileNamne = "input.css";
// Comando para compilar o Tailwind CSS
const tailwindComand = `npx tailwindcss -i ${cssPath}input.css -o ./style.css --minify`;

// compila o JavaScript
exports.buildJavascript = buildJavascript;
function buildJavascript() {
  return (
    src(libsJsPath)
      // Minifica o JS
      .pipe(uglify())
      // Concatena em um unico arquivo
      .pipe(concat(jsOutFileName))
      // pasta de destino do arquivo compilado
      .pipe(dest(jsPath))
  );
}

// Compila o SASS em CSS
exports.buildStyles = buildStyles;
function buildStyles() {
  return (
    src(scssPath)
      //compila o SASS em CSS
      .pipe(sass().on("error", sass.logError))
      // adicionar prefixos de fornecedores às regras CSS
      .pipe(autoprefixer())
      // concatena o css em um unico arquivo
      .pipe(concat(cssOutFileNamne))
      // pasta destino do arquivo compilado
      .pipe(dest(cssPath))
  );
}

// Executa o Tailwind CSS
exports.runTailwind = runTailwind;
function runTailwind() {
  return run(tailwindComand).exec();
}

exports.default = function () {
  watch(scssPath, series(buildStyles, runTailwind));
  watch(libsJsPath, buildJavascript);
};
