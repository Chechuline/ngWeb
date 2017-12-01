import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { APP_ROUTES } from './app.routing';
import { ContributorsService } from './footer/contributors.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    NglModule.forRoot(),
    BrowserModule,
    FormsModule,
    MatMenuModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [ContributorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
