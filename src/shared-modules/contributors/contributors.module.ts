import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorsListComponent } from './contributors-list/contributors-list.component';
import { ContributorsDetailsComponent } from './contributors-details/contributors-details.component';
import { CONTRIBUTORS_ROUTES } from './contributors.routing'
import { ServiceGithubService } from '../service-github/service-github.service';

@NgModule({
  imports: [
    CommonModule,
    CONTRIBUTORS_ROUTES
  ],
  providers:[ServiceGithubService],
  declarations: [ContributorsListComponent, ContributorsDetailsComponent],
  exports:[ContributorsListComponent, ContributorsDetailsComponent]
})
export class ContributorsModule { }
