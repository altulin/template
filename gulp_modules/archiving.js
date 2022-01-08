import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const now = new Date();
const year = now.getFullYear().toString().padStart(2, "0");
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");

const {
  gulp: { src, dest },
  zip,
} = pluginsObject;

const { distFolder } = paths;

const creteArchive = () => {
  return src([`${distFolder}/*/**`, `${distFolder}/*`])
    .pipe(zip(`${distFolder}_${year}-${month}-${day}_${hours}-${minutes}.zip`))
    .pipe(dest(`./`));
};

export default creteArchive;
