import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClassroom, IClassroomType } from '@suite/interfaces';
import { HttpDatabaseService } from '@suite/common/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'school-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  classroom: IClassroom
  classroomTypes$: Observable<IClassroomType[]>
  constructor(
    private route: ActivatedRoute,
    private database: HttpDatabaseService
  ) {
    const { classroom } = this.route.snapshot.data
    this.classroom = classroom
    console.log('classroom: ', classroom)
    console.log('classroom: ', this.route.snapshot.data)
  }

  ngOnInit() {
    this.classroomTypes$ = this.database.get('/api/school/classroom-types', {})
  }

}
