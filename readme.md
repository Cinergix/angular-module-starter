# Angular module starter

## Getting started

- Find and replace `AngularModuleStarter` in the repo with your module name in CamelCase
- Find and replace `angular-module-starter` in the repo with your module name in kebab-case

```
npx replace 'AngularModuleStarter' 'MyModule'
npx replace 'angular-module-starter' 'my-module'
```

## Using with npm link

Add the following to the tsconfig.json file under compilerOptions to fix an AOT build issue.

```
"paths": {
    "@angular/*": [ "../node_modules/@angular/*" ]
}
```