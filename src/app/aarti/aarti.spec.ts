import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aarti } from './aarti';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Aarti', () => {
  let component: Aarti;
  let fixture: ComponentFixture<Aarti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aarti],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aarti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have aarti list', () => {
    expect(component.aartiList().length).toBeGreaterThan(0);
  });

  it ('should have selectedAartiIndex initialized to 0', () => {
    expect(component.selectedAartiIndex).toBe(0);
  });

});
