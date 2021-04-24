import { NgModule } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFormComponent } from './item-form.component';
import { RouterModule } from '@angular/router';
import { ItemDetailGuard } from './item-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ItemInputComponent } from './item-input.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

//strangely, the buttonsModule has to be in the direct module to work. it doesn't work in the shared moduel
//this may be a limitation of the third-party package

@NgModule({
  declarations: [
    ItemFormComponent,
    ItemDetailComponent,
    ItemInputComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'items', component: ItemFormComponent },
      { path: 'item-input', component: ItemInputComponent },
      { 
        path: 'items/:id', 
        canActivate: [ItemDetailGuard],
        component: ItemDetailComponent 
      },
    ]),
    SharedModule,
    ButtonsModule,

  ]
})
export class ItemModule { }
