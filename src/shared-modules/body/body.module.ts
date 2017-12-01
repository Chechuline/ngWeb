import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { BODY_ROUTES } from './body.routing'
import { ServiceGithubService } from '../service-github/service-github.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    BODY_ROUTES,
    HttpClientModule
  ],
  declarations: [BodyComponent],
  entryComponents: [BodyComponent],
  providers:[ServiceGithubService],
  exports: [BodyComponent]
})
export class BodyModule {
}
