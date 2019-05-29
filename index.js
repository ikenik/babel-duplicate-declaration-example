const babel = require("@babel/core");

const filename = "example.ts",
    code = [
        "module src {",
        "    export namespace ns1 {",
        "        export class foo {",
        "            F1: string = 'test';",
        "        }",
        "    }",
        "    export namespace ns2 {",
        "        export class foo {",
        "            F1: string;",
        "        }",
        "    }",
        "}"
    ].join("\n");

var ast = babel.parseSync(code, {
    sourceFileName: filename,
    filename: filename,
    presets: ["@babel/preset-typescript"]
});

babel.traverse(ast, {
    ClassDeclaration: (path) => {
        console.log("class ", path.node.id.name);
    }
});
