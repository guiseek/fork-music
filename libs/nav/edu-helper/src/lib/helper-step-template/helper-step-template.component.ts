import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, Input, ContentChild } from '@angular/core';
import { HelperHotkeyListenerComponent } from '../helper-hotkey-listener.component';
import { MatMenu } from '@angular/material';
import { IStepOption, HelperService } from '../helper.service';
import { HelperStepTemplateService } from './helper-step-template.service';

@Component({
  selector: 'edu-helper-step-template',
  templateUrl: './helper-step-template.component.html',
  styles: [`
    ::ng-deep .helper-step .mat-menu-content { 
      padding: 0 !important; 
    }
  `],
  providers: [
    HelperStepTemplateService
  ]
})
export class HelperStepTemplateComponent extends HelperHotkeyListenerComponent implements AfterViewInit {
  @ViewChild(MatMenu, { static: true }) public helperStep: MatMenu;

  @Input()
  @ContentChild(TemplateRef, { static: true })
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  public step: IStepOption = {};

  constructor(
    private helperStepTemplateService: HelperStepTemplateService,
    public helperService: HelperService
  ) {
    super(helperService);
  }

  public ngAfterViewInit(): void {
    this.helperStepTemplateService.templateComponent = this;
  }
}
