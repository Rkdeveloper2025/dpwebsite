import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsfulMantra } from './usful-mantra';

describe('UsfulMantra', () => {
  let component: UsfulMantra;
  let fixture: ComponentFixture<UsfulMantra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsfulMantra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsfulMantra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
