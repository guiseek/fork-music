import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassroomsLayoutComponent } from './classrooms-layout.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomScheduleComponent } from './classroom-schedule/classroom-schedule.component';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule } from '@angular/material';
import { DialogModule } from '@suite/cdk/dialog';
import { ClassroomResolverService } from '@suite/common/core';

const modules = [
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule
]

@NgModule({
  imports: [
    CommonModule,
    TableBackendModule,
    DynamicFormModule,
    DialogModule,
    FlexLayoutModule,
    ...modules,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: ClassroomsLayoutComponent, children: [
        { path: '', component: ClassroomsComponent },
        { path: ':id', component: ClassroomComponent, resolve: { classroom: ClassroomResolverService } },
        { path: ':id/schedule', component: ClassroomScheduleComponent }
      ] }
    ])
  ],
  declarations: [ClassroomsLayoutComponent, ClassroomsComponent, ClassroomComponent, ClassroomScheduleComponent]
})
export class ClassroomsModule {}
