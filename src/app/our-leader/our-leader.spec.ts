import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeader } from './our-leader';
import { provideZonelessChangeDetection } from '@angular/core';

describe('OurLeader', () => {
  let component: OurLeader;
  let fixture: ComponentFixture<OurLeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurLeader],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurLeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have leaderList array', () => {
    expect(component.leaderList.length).toBeGreaterThan(0);
  });
});
