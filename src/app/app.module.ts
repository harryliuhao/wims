import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WelcomeComponent } from './home/welcome.component';
import { ItemModule } from './item-form/item.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot([

      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    ItemModule
     ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 

    WelcomeComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
