import { Component, OnInit } from '@angular/core';
import { DialogService } from '@suite/cdk/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public columns = [
    { columnDef: 'id', header: 'No.', cell: (element: any) => `${element.id}` },
    { columnDef: 'firstName', header: 'Nome', cell: (element: any) => `${element.firstName}, ${element.lastName}` },
    { columnDef: 'mobilePhone', header: 'Celular', cell: (element: any) => `${element.mobilePhone}` },
    // { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
    // { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  ];

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onEdit(data) {
    console.table(data)
    this.router.navigate([data.id], { relativeTo: this.route })
  }
}
