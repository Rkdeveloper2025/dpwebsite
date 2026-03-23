import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsfulMantra } from './usful-mantra';
import { provideZonelessChangeDetection } from '@angular/core';

describe('UsfulMantra', () => {
  let component: UsfulMantra;
  let fixture: ComponentFixture<UsfulMantra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsfulMantra],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsfulMantra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mantraList array', () => {
    expect(component.mantralist.length).toBeGreaterThan(0);
  });
});
