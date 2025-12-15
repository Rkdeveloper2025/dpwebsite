import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarosel } from './my-carosel';

describe('MyCarosel', () => {
  let component: MyCarosel;
  let fixture: ComponentFixture<MyCarosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCarosel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
