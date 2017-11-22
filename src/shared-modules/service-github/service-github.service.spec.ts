import { TestBed, inject } from '@angular/core/testing';

import { ServiceGithubService } from './service-github.service';
import { HttpClientModule } from '@angular/common/http'
import { ServiceGithubServiceFake } from 'shared-modules/service-github/service-github.service.fake';

describe('ServiceGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [{provide:ServiceGithubService,useClass:ServiceGithubServiceFake}]
    });
  });

  it('should be created', inject([ServiceGithubService], (service: ServiceGithubService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve projects',()=>{
    const service:ServiceGithubService = TestBed.get(ServiceGithubService);
    service.getProjects().subscribe(
      projects => { expect(projects).toBeDefined() }
    )
  });

  it('should retrieve users',()=>{
    const service:ServiceGithubService = TestBed.get(ServiceGithubService);
    service.getUsers().subscribe(
      users => expect(users[0].name).toBe('ardiadrianadri')
    )
  })
});
