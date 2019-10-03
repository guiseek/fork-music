import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@suite/ui-kit';

import { InstructorsLayoutComponent } from './instructors-layout.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { InstructorComponent } from './instructor/instructor.component';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { DialogModule } from '@suite/cdk/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  MatCardModule,
  MatButtonModule,
  // MatSnackBarModule,
  MatToolbarModule,
  // MatListModule,
  // MatMenuModule,
  MatIconModule,
  // MatTabsModule
]

@NgModule({
  imports: [
    CommonModule,
    TableBackendModule,
    DialogModule,
    UiKitModule,
    FlexLayoutModule,
    ...modules,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '', component: InstructorsLayoutComponent,
        children: [
          {
            path: '',
            component: InstructorsComponent
          },
          {
            path: ':id',
            component: InstructorComponent,
            // resolve: {
            //   classroom: ClassroomResolverService
            // }
          },
        ]
      }
    ])
  ],
  declarations: [InstructorsLayoutComponent, InstructorsComponent, InstructorComponent]
})
export class InstructorsModule { }
