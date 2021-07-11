import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMailComponent } from './view-mail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMailRoutingModule { }
