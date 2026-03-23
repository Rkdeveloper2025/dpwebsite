import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MyCarosel } from './my-carosel';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { caroselList } from '../Models/carosel';

describe('MyCarosel', () => {
  let component: MyCarosel;
  let fixture: ComponentFixture<MyCarosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarosel],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCarosel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('images', caroselList);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images array', () => {
    expect(component.images().length).toBeGreaterThan(0);
  });
  it('Should have activatorIndex defined', () => {
    expect(component.activatorIndex()).toBeGreaterThan(-1);
  });
  it('interval$ is being unsubscribed on destroy', () => {
    const spy = spyOn(component['interval$'], 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
  /* it('active index should be changing after every interval', fakeAsync(() => {
    const initialIndex = component.activatorIndex();
    tick(5000);
    expect(component.activatorIndex()).toBeGreaterThan(initialIndex);
  }));
  it('active index should be reset to 0 when it exceeds the number of images', fakeAsync(() => {
    tick(5000 * (component.images().length + 1));
    expect(component.activatorIndex()).toBe(0);
  })); */
});
