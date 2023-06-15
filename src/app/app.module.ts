import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './components/routes/cats/cats.component';
import { DogsComponent } from './components/routes/dogs/dogs.component';
import { MiceComponent } from './components/routes/mice/mice.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    MiceComponent,
    NavComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
