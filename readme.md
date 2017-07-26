# Angular module starter

The angular-module-starter contains code required to build typescript based Angular modules. The starter is built using the Angular CLI and customized to suit Angular modules.

## Writing new modules

- Clone the starter repository (following command will create a directory named my-module)

```shell
git clone https://github.com/Cinergix/angular-module-starter.git my-module
cd my-module
```

- Find and replace `AngularModuleStarter` in the repo with your module name in CamelCase
- Find and replace `angular-module-starter` in the repo with your module name in kebab-case

```shell
npx replace 'AngularModuleStarter' 'MyModule'
npx replace 'angular-module-starter' 'my-module'
```

- Add module source code inside the `src` directory
- Add module test code inside the `test` directory
- Add exports in the `index.ts` file in the root directory

## Using the module

Publish the module to npm and install or install it directly from Github or other supported sources.

```shell
npm install my-module #or
npm install github-user/my-module
```

### Using with npm link

We do not recommended using npm link with Angular CLI projects. If you know what you're doing, this may help: add the following code to the tsconfig.json file in your Angular application under compilerOptions to fix AOT build issues. It may be necessary to add other peer dependencies here if needed.

```
"paths": {
    "@angular/*": [ "../node_modules/@angular/*" ]
}
```
