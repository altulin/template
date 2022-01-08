import pluginsObject from "./gulp_modules/plugins.js";
import makeImagesSvg from "./gulp_modules/images-svg.js";
import makeImages from "./gulp_modules/images.js";
import createSprite from "./gulp_modules/sprite.js";
import getStyleFile from "./gulp_modules/styles.js";
import { browserSync } from "./gulp_modules/browsersync.js";
import cleanTools from "./gulp_modules/clean.js";
import getScriptFile from "./gulp_modules/scripts.js";
import createWebp from "./gulp_modules/images-webp.js";
import getWatchers from "./gulp_modules/watch.js";
import transformPug from "./gulp_modules/pug.js";
import getCopying from "./gulp_modules/copying.js";
import creteArchive from "./gulp_modules/archiving.js";

const { parallel, series } = pluginsObject.gulp;
const { delDistFolder, cleanImg, cleanZip, cleanHtml, cleanCss } = cleanTools;

const development = series(
  parallel(
    makeImagesSvg,
    makeImages,
    createSprite,
    getStyleFile,
    getScriptFile,
    createWebp,
    transformPug
  ),
  parallel(getWatchers, browserSync)
);

const production = series(
  parallel(delDistFolder, cleanImg, cleanZip, cleanHtml, cleanCss),
  parallel(
    makeImagesSvg,
    makeImages,
    createSprite,
    getStyleFile,
    getScriptFile,
    createWebp,
    transformPug
  ),
  series(getCopying, creteArchive)
);

const test = series(creteArchive);

export { development, production, test };
