const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
const { externalGlobalPlugin } = require("esbuild-plugin-external-global");

esbuild
  .build({
    entryPoints: ["./src/index.tsx"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: "node",
    format: "cjs",
    target: "es6",
    external: ["react", "react-dom"],
    plugins: [
      nodeExternalsPlugin({
        peerDependencies: true,
        devDependencies: true,
      }),
      externalGlobalPlugin({
        react: "window.React",
        "react-dom": "window.ReactDOM",
      }),
    ],
  })
  .catch(() => process.exit(1));
