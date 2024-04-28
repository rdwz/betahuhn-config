import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  bundle: env === 'production',
  clean: true,
  dts: {
    resolve: true,
    entry: [
      './src/index.ts',
      './src/config/release.config.ts',
      './src/config/eslint.config.ts',
      './src/config/eslintVue.config.ts',
      './src/config/eslintTs.config.ts'
    ],
  },
  entry: ["src/**/*.ts"],
  format: ["esm"],
  minify: env === 'production',
  outDir: env === 'production' ? 'dist' : 'lib',
  onSuccess: 'mkdir -p dist/config/helpers && cp -r src/config/helpers dist/config',
  platform: "node",
  skipNodeModulesBundle: true,
  sourcemap: true,
  splitting: false,
  target: 'esnext',
  watch: env === 'development',
}