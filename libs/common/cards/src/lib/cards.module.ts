import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardDirective } from './flip-card/flip-card.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FlipCardComponent, FlipCardDirective],
  exports: [FlipCardComponent, FlipCardDirective]
})
export class CardsModule {}
