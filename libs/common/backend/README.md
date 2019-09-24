ng generate @nestjs/schematics:library location --prefix=backend --language=ts --path=backend --rootDir=libs/common --dry-run

ng generate @nestjs/schematics:service state --path=src/services --language=ts --sourceRoot=libs/common/backend/location --flat=true --spec=false --dry-run
ng generate @nestjs/schematics:service city --path=src/services --language=ts --sourceRoot=libs/common/backend/location --flat=true --spec=false --dry-run

ng generate @nestjs/schematics:controller location --path=src/controllers --language=ts --sourceRoot=libs/common/backend/location --flat=true --spec=false --dry-run

ng generate @nestjs/schematics:library typeorm --prefix=backend --language=ts --path=backend --rootDir=libs/common --dry-run


ng generate @nestjs/schematics:class abstract-crud --spec=false --path=src/services --language=ts --sourceRoot=/libs/common/backend/typeorm