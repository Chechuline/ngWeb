import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', loadChildren: '../shared-modules/body/body.module#BodyModule'},
  {path: 'contact-us', loadChildren: '../shared-modules/contact-us/contact-us.module#ContactUsModule'},
  {path: 'contributors', loadChildren: '../shared-modules/contributors/contributors.module#ContributorsModule'},
  {path: '**', redirectTo: 'index'}
];
export const APP_ROUTES = RouterModule.forRoot(routes);
