import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions.component';
import { PlansComponent } from './plans/plans.component';
import { SoftwaresComponent } from './softwares/softwares.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PlanComponent } from './plan/plan.component';
import { InvoicesComponent } from './subscription/invoices/invoices.component';


const routes: Routes = [
  { path: '', component: SubscriptionsComponent }
];

@NgModule({
  declarations: [SubscriptionsComponent, PlansComponent, SoftwaresComponent, SubscriptionComponent, PlanComponent, InvoicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionsModule { }
