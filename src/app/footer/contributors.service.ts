import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/Rx';

@Injectable()
export class ContributorsService {
  contr: any = null;
 constructor(public http: HttpClient) {}
   getContributors() {
    return this.http.get('/assets/contributors.json');
   }

 }
