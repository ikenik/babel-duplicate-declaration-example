## babel-duplicate-declaration-example

**See [index.js](index.js)**

### Description

Example typescript code

``` ts
module src {
    export namespace ns1 {
        export class foo {
            F1: string;
        }
    }
    export namespace ns2 {
        export class foo {
            F1: string;
        }
    }
}
```

babel parser config

``` js
{
    presets: ["@babel/preset-typescript"]
}
```

### Step to reproduce

Run:

``` sh
node index.js
```

Get an error:

``` log
D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\scope\index.js:344
      throw this.hub.buildError(id, `Duplicate declaration "${name}"`, TypeError);
      ^

TypeError: D:\Git\babel-duplicate-declaration-example\example.ts: Duplicate declaration "foo"
   6 |     }
   7 |     export namespace ns2 {
>  8 |         export class foo {
     |                      ^
   9 |             F1: string;
  10 |         }
  11 |     }
    at File.buildCodeFrameError (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\core\lib\transformation\file\file.js:261:12)
    at Scope.checkBlockScopedCollisions (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\scope\index.js:344:22)
    at Scope.registerBinding (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\scope\index.js:501:16)
    at Scope.registerDeclaration (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\scope\index.js:444:12)
    at Object.BlockScoped (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\scope\index.js:187:28)
    at Object.newFn (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\visitors.js:230:17)
    at NodePath._call (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\path\context.js:53:20)
    at NodePath.call (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\path\context.js:36:14)
    at NodePath.visit (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\path\context.js:88:12)
    at TraversalContext.visitQueue (D:\Git\babel-duplicate-declaration-example\node_modules\@babel\traverse\lib\context.js:118:16)
```
