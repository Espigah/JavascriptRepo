//https://medium.com/@jonnysamps/angular-2-bundling-with-rollup-4738d0148a2c#.q1d67trfm

// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
// Custom Rollup Plugin to resolve rxjs deps
// Thanks to https://github.com/IgorMinar/new-world-test/blob/master/es6-or-ts-bundle/rollup.config.js
class RollupNG2 {
  constructor(options){
    this.options = options;
  }
  resolveId(id, from){
    if(id.startsWith('rxjs/')){
      return `${__dirname}/node_modules/rxjs/${id.replace('rxjs/', '')}.js`;
    }
  }
}
const rollupNG2 = (config) => new RollupNG2(config);

export default {
  entry: 'app/main.ts',
  dest: 'dist/rollup.bundle.es2015.js',
  format: 'iife',
  sourceMap: true,

  plugins: [
    typescript(),
    rollupNG2(),
    nodeResolve({ jsnext: true, main: true }),
  ],
  // This is how you exclude code from the bundle
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
     'rxjs',
      'angular2-in-memory-web-api'
   //, '@angular/router-deprecated'
  ],
  // This is how you link the referenced module ids to the
  // global variables exposed by the vendor bundle.
  globals: {
    '@angular/core': 'vendor._angular_core',
    '@angular/http': 'vendor._angular_http',
    '@angular/platform-browser' :'vendor._platform-browser',
    '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic'
       // ,    '@angular/router-deprecated': 'vendor._angular_routerDeprecated'
  }
}