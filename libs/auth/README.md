# Libs Auth Feature

Commands
```ts
// nest
// old way
ng generate @nestjs/schematics:library api --prefix=auth --language=ts --path=auth --dry-run

//new way
ng generate @nestjs/schematics:library users --prefix=auth --language=ts --path=auth/backend -d
ng generate @nestjs/schematics:library users --prefix=auth --language=ts --path=auth/backend -d


// angular
ng generate @nrwl/angular:library sign --directory=auth/lazy --prefix=auth --style=scss --routing --lazy --parentModule=apps/agent-workdesk/src/app/app.module.ts --dry-run
```
