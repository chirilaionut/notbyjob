import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './shared/general/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'account', component: AccountComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
