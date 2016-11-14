# ng-app-aot-rollup-build

Build angular2 app with aot rollup for production

## Usage

First, install dependent packages by:

```sh
npm install
```

create `dist` folder if not exists

```sh
makedir dist
```

For normal production build, use broserify and uglifyjs, run:

```sh
npm run prod
```

For optimized production build, use aot and tree shaking, run:

```sh
npm run prod-aot
```

For size analysis report, just, run:

```sh
ls -lh dist
```

the `dist/bundle-aot.min.js` compressed with gzip will less then 50K, ideal for production use.