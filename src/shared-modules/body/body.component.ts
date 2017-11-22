import { Component, OnInit } from '@angular/core';
import { ServiceGithubService } from '../service-github/service-github.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private gs: ServiceGithubService) { }

  ngOnInit() {
    const usersOfAProject = this.gs.getUsers();
    usersOfAProject.subscribe(
      res => console.log(res),
      err => console.error(err)
    )
    const PROJ = this.gs.getProjects().subscribe(
      res => console.log(res)
    )
  }

}
