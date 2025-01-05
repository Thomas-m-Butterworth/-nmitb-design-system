import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json'));

export default [
    {
        input: "src/index.ts",
        external: [
            ...Object.keys(packageJson.peerDependencies || {}),
            ...Object.keys(packageJson.dependencies || {}),
            'react/jsx-runtime'
        ],
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/esm/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            typescript({
                tsconfig: "./tsconfig.json",
                noEmitOnError: true,
                declaration: false,
                declarationMap: false,
            }),
            json(),
        ],
    },
];
