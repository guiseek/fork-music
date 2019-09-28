import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { categoryResources } from '@suite/data';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';
import { DialogFormComponent } from '@suite/ui-kit';

@Component({
  selector: 'wd-quick-features',
  templateUrl: './quick-features.component.html',
  styleUrls: ['./quick-features.component.scss']
})
export class QuickFeaturesComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        {
          title: 'Categoria',
          cols: 1,
          rows: 1,
          // table: categoryResources.tableConfig,
          dialog: categoryResources.dialogConfig,
          // form: categoryResources.formFields
        },
        {
          title: 'Card 2',
          cols: 1,
          rows: 1,
          // table: categoryResources.tableConfig,
          form: categoryResources.formFields
        },
        {
          title: 'Card 3',
          cols: 1,
          rows: 2,
          form: categoryResources.formFields,
          dialog: categoryResources.dialogConfig,
          table: categoryResources.tableConfig,
        },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private database: HttpDatabaseService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }
  add({ model, ...data }) {
    console.log(data)
    const ref = this.dialogService.open(
      DialogFormComponent, data
    )
    const sub = ref.afterClosed().subscribe(res => {
      console.log(res)
      sub.unsubscribe()
    })
  }
  onSubmit(endpoint, data) {
    console.table(data)
    if (data) {
      this.database.post(
        endpoint, data
      ).subscribe((res) => {
        console.table(res)
      })
    }
  }
}
