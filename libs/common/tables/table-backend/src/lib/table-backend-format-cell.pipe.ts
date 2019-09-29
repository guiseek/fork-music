import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Pipe({ name: 'formatCell' })
export class TableBackendFormatCellPipe implements PipeTransform {
  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
  ) {}
  transform(value: any, format: string) {
    // console.log(`%c${value == 'null'}`, 'color: red')
    if (this.isNull(value)) {
      return '';
    }
    switch (format) {
      case 'date': return this.datePipe.transform(value)
      case 'currency': return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
      // case 'currency': return this.currencyPipe.transform(value, 'BRL')
    }
    return value;
  }
  isNull(value: any) {
    return value === undefined || value === null || value === 'null'
  }
}