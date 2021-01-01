import { NgModule } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFormComponent } from './item-form.component';
import { RouterModule } from '@angular/router';
import { ItemDetailGuard } from './item-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ItemFormComponent,
    ItemDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'items', component: ItemFormComponent },
      { 
        path: 'items/:id', 
        canActivate: [ItemDetailGuard],
        component: ItemDetailComponent 
      },
    ]),
    SharedModule
  ]
})
export class ItemModule { }
