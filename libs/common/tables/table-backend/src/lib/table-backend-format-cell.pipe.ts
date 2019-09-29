import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Pipe({ name: 'formatCell' })
export class TableBackendFormatCellPipe implements PipeTransform {
  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
  ) {}
  transform(value: any, format: string) {
    console.log('format', format)
    console.log('value', value)
    if (!value) {
      return 'not available';
    }

    if (value === undefined) {
      return 'not available';
    }
    // const fmt = format && format.split(':')[0]
    // console.log('fmt: ', fmt)
    switch (format) {
      case 'date': return this.datePipe.transform(value)
      case 'currency': return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
      // case 'currency': return this.currencyPipe.transform(value, 'BRL')
    }
    return value;
  }
}