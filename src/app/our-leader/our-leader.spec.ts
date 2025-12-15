import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeader } from './our-leader';

describe('OurLeader', () => {
  let component: OurLeader;
  let fixture: ComponentFixture<OurLeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurLeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurLeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
