import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have imageList populated', () => {
    expect(component.imageList().length).toBeGreaterThan(0);
  });
  it('Should have carousel component nested within home component', () => {
    const carouselElement = fixture.nativeElement.querySelector('app-my-carosel');
    expect(carouselElement).toBeTruthy();
  });
  it('Should have hdpitihass variable  populated', () => {
    expect(component.hdpItihass().length).toBeGreaterThan(0);
  });
  it('Should have been displaying hdpItihass content in the template', () => {
    const hdpItihassElement = fixture.nativeElement.querySelector('div[aria-label="history"]');
    expect(hdpItihassElement).toBeTruthy();
  });
});
