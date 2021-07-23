import { defineConfig } from "vite";
import react from "vite-preset-react";
import svgr from "vite-plugin-svgr";
import { resolve as path } from "path";

const mapAliases = (base: string, folders: string[]) =>
  folders.map(folder => ({
    find: `@/${folder}`,
    replacement: path(base + folder),
  }));

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: mapAliases("./src/", ["components", "pages", "store", "styles", "svg", "types", "utils"]),
  },
});
