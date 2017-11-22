import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/toArray';


@Injectable()
export class ServiceGithubService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://api.github.com/orgs/madrid-ngLabs/repos')
    .mergeMap((repositories: any) => Observable.from(repositories))
    .mergeMap((repository: any) => this.http.get(repository.contributors_url))
    .mergeMap((contributors: any) => Observable.from(contributors))
    .map((contributor: any) => ({name: contributor.login, url: contributor.html_url, avatar: contributor.avatar_url}))
    .distinct(x => x.name)
    .toArray()
  }

  getProjects() {
    return this.http.get('https://api.github.com/orgs/madrid-ngLabs/repos').map(
      result => { return result },
      error => { return error }
    );
  }

}
