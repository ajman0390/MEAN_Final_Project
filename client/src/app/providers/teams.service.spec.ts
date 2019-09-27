import { TestBed } from '@angular/core/testing';

import { TeamService } from './teams.service';

describe('TeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });
});
