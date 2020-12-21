import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ItemFormComponent },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
     ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    ItemFormComponent,
    StarComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
