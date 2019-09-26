import { Component, OnInit } from '@angular/core';
import { QuestionService } from '@suite/common/forms/dynamic-form';

@Component({
  selector: 'wd-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [QuestionService]
})
export class ServicesComponent implements OnInit {
  questions: any[]
  constructor(
    private service: QuestionService
  ) {
    this.questions = service.getQuestions()
  }

  ngOnInit() {
  }

}
