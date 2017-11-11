import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    ContactComponent
  ],
  imports: [
    NglModule.forRoot(),
    BrowserModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
