# Libs Auth Feature

Commands
```ts
// nest
// old way
ng generate @nestjs/schematics:library api --prefix=auth --language=ts --path=auth --dry-run

//new way
ng generate @nestjs/schematics:library users --prefix=auth --language=ts --path=auth/backend -d
ng generate @nestjs/schematics:library users --prefix=auth --language=ts --path=auth/backend -d

ng generate @nestjs/schematics:controller authSignin --path=src/controllers --sourceRoot=libs/auth/backend/auth --module=auth --flat=true --dry-run
ng generate @nestjs/schematics:controller authSignup --path=src/controllers --sourceRoot=libs/auth/backend/auth --module=auth --flat=true --dry-run

// angular
ng generate @nrwl/angular:library sign --directory=auth/lazy --prefix=auth --style=scss --routing --lazy --parentModule=apps/agent-workdesk/src/app/app.module.ts --dry-run
```
