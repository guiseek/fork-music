# Libs Auth Feature

Commands
```bash
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

ng generate @schematics/angular:component sign-shell --project=auth-lazy-sign --changeDetection=OnPush --style=scss --no-spec --skipTests --flat --dry-run
ng generate @schematics/angular:component sign-in --project=auth-lazy-sign --style=scss --dry-run
ng generate @schematics/angular:component sign-up --project=auth-lazy-sign --style=scss --dry-run

```
