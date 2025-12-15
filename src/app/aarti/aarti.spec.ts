import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aarti } from './aarti';

describe('Aarti', () => {
  let component: Aarti;
  let fixture: ComponentFixture<Aarti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aarti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aarti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
