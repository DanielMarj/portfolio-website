import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { CenterViewComponent } from './center-view/center-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LeftNavComponent,
    HeaderComponent,
    CenterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
