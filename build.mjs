import nwbuild from "nw-builder";

nwbuild({
  mode: "build",
  glob: false,
  flavor: "normal",
  cacheDir: "./node_modules/nw",
  srcDir: "./src",
   app: {
        icon: 'cat.ico', //Needed for some reason
    },
  platforms: ["win64","osx64","linux64"],
  buildType: "single"
});


