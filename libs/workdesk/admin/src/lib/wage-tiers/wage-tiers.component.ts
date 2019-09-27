import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { IWageTier } from '@suite/interfaces';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { merge, of, Subject, BehaviorSubject } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogService } from '@suite/cdk/dialog';
import { DialogFormComponent } from '@suite/ui-kit';
import { wageTierFormFields } from '@suite/common/forms/resources';

const ENDPOINT = '/api/wage-tiers'

@Component({
  selector: 'wd-wage-tiers',
  templateUrl: './wage-tiers.component.html',
  styleUrls: ['./wage-tiers.component.scss']
})
export class WageTiersComponent implements AfterViewInit {
  columns = [
    { columnDef: 'id', header: 'No.', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
    // { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
    // { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  ];
  refresh = new Subject
  filter = new BehaviorSubject<string>('')

  @ViewChild('formTemplate', { static: true }) dialogForm: TemplateRef<HTMLElement>
  wageForm: FormGroup

  search = new FormControl
  constructor(
    private database: HttpDatabaseService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private snack: MatSnackBar,
    private _fb: FormBuilder
  ) {
    this.wageForm = this._fb.group({
      id: [],
      name: ['', Validators.required]
    })
  }
  applyFilter(value = '') {
    this.filter.next(value)
  }
  edit(data) {
    this.wageForm.patchValue(data)
    console.table(data)
  }
  add() {
    const ref = this.dialogService.open(
      DialogFormComponent, {
        data: wageTierFormFields,
        header: {
          title: 'Faixa salarial',
          subtitle: 'Agrupe despesas com salários em faixas',
        },
        draggable: true,
        hasBackdrop: true
      }
    )
    const sub = ref.afterClosed().subscribe((result) => {
      if (result) {
        const save$ = this.database.post(ENDPOINT, result)
          .subscribe((response) => {
            this.openSnack('Salvo!')
            save$.unsubscribe()
          })
        sub.unsubscribe()
      }
    })
  }
  openForm(data?) {
    this.wageForm.patchValue(data || {})
    const ref = this.dialog.open(
      this.dialogForm, {
      data: {
        title: data ? 'Alterar' : 'Adicionar'
      }
    }
    )
    const sub = ref.afterClosed().subscribe((value) => {
      console.log(value)
      if (value) {
        this.save(value)
      }
      this.wageForm.reset()
      this.wageForm.updateValueAndValidity()
      this.refresh.next(true)
      sub.unsubscribe()
    })

  }
  openSnack(message: string) {
    const ref = this.snack.open(message, 'Recarregar', { duration: 5000 })
    const sub = ref.onAction().subscribe(() => {
      this.refresh.next(true)
      sub.unsubscribe()
    })
  }
  ngAfterViewInit() {
    console.log('dialogForm: ', this.dialogForm)
  }
  save(value: IWageTier) {
    const sub = this.database.post(ENDPOINT, value)
      .subscribe((res) => {
        console.log(res)
        this.refresh.next()
        sub.unsubscribe()
      })
  }
}
