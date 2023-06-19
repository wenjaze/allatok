import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AnimalComponent } from './components/animal/animal.component';
import { StoreModule } from '@ngrx/store';
import { visitMiceReducer } from './state/visited-pages.state';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ visitedPages : visitMiceReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
