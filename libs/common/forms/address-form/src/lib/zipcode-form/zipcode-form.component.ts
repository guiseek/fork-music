import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '@suite/data';
import { timer } from 'rxjs';
import { switchMap, map, filter, tap } from 'rxjs/operators';
import { Viacep } from '@suite/interfaces';

@Component({
  selector: 'suite-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.scss']
})
export class ZipcodeFormComponent implements OnInit {
  @Input() parentControl: FormControl
  @Output() addressChange = new EventEmitter()
  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient
  ) {
    if (!this.parentControl) {
      this.parentControl = this._fb.control('',
        [
          Validators.minLength(8),
          Validators.maxLength(8)
        ],
        this.checkAddress
      )
    }
  }

  ngOnInit() {
  }
  findAddressByZip(zip) {
    return this._http.get(
      endpoint.viacep(zip)
    )
  }
  onAddress(address) {
    this.addressChange.emit(
      extractCepValuesFromResponse(address)
    )
  }
  checkAddress = (control: FormControl) =>
    timer(600).pipe(
      filter(() => control.value),
      switchMap(() => this.findAddressByZip(control && control.value ? control.value : '')),
      map((response: any) => {
        if (response.erro) {
          return {
            error: true,
            notFound: 'CEP não encontrado'
          }
        }
        this.addressChange.emit(
          extractCepValuesFromResponse(response)
        )
        return null
      }),
      tap(res => {
        console.log(res)
      })
    )
}

function extractCepValuesFromResponse(response: Viacep) {
  return {
    id: response.ibge,
    zip: response.cep.replace('-', ''),
    state: response.uf,
    city: response.localidade,
    neighborhood: response.bairro,
    streetAddress: response.logradouro
  }
}