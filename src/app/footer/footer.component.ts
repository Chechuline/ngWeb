import { Component, OnInit } from '@angular/core';
import { ContributorsService } from './contributors.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  contributors: any;
  constructor( private CS: ContributorsService) {
  }

  ngOnInit() {
    this.CS.getContributors()
    .subscribe(data => {
      this.contributors = data;
    }, reject => {
      console.log(reject);
    })
  }

}
