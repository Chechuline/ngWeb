import { RouterModule, Routes } from '@angular/router';
import { ContributorsListComponent } from 'shared-modules/contributors/contributors-list/contributors-list.component';
import { ContributorsDetailsComponent } from 'shared-modules/contributors/contributors-details/contributors-details.component';

const cont_routes: Routes = [
  {path: '',  component:ContributorsListComponent},
  {path: ':name',  component:ContributorsDetailsComponent},
];
export const CONTRIBUTORS_ROUTES = RouterModule.forChild(cont_routes);