import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatMenuHarness, MatMenuItemHarness} from '@angular/material/menu/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterTestingHarness} from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Calendar } from './calendar/calendar';
import { OurLeader } from './our-leader/our-leader';
import { UsfulMantra } from './usful-mantra/usful-mantra';
import { Aarti } from './aarti/aarti';
import { HarnessLoader } from '@angular/cdk/testing';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let app:App
  let compiledElement:HTMLElement;
  let loader:HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(),provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    
    //fixture.detectChanges();
    await fixture.whenStable();
    compiledElement = fixture.nativeElement as HTMLElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  it('Router outlet should be present', () => {
    const routerOutlet = compiledElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
  it('There should be a nav element', () => {
    const navElement = compiledElement.querySelector('nav');
    expect(navElement).toBeTruthy();
  });
  it('There should be a div with class container', () => {
    const divElement = compiledElement.querySelector('div.container');
    expect(divElement).toBeTruthy();
  });
  it('There should be website name in h1 tag', () => {
    const h1Element = compiledElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element?.textContent).toContain('श्री श्री १०८ दुर्गा पूजा समिति हरसुवार');
  });
  it('Home router links should be present and display correct text', () => {
    const linkElements = compiledElement.querySelectorAll('button[routerLink="/home"]');
    expect(linkElements[0].textContent).toContain('मां जगजननी');
  });

  it('calendar router link should be present', () => {
    const linkElements = compiledElement.querySelectorAll('button[routerLink="/calendar"]');
    expect(linkElements[0].textContent).toContain('पंचांग');
  });

  it('Aarti router link should be present', () => {
    const linkElements = compiledElement.querySelectorAll('button[routerLink="/aarti"]');
    expect(linkElements[0].textContent).toContain('आरती');
  });

  it('Aarti router link should be present', () => {
    const linkElements = compiledElement.querySelectorAll('button[routerLink="/aarti"]');
    expect(linkElements[0].textContent).toContain('आरती');
  });
  it('should load all menu harnesses', async () => {
    const menues = await loader.getAllHarnesses(MatMenuHarness);
    expect(menues.length).toBe(1);
    const menuTrigger = await loader.getHarness(MatMenuHarness);
    await menuTrigger.open();
  
    const items = await menuTrigger.getItems();
    expect(items.length).toBe(3);
  });
  /* it('Route should have active class when navigated', () => {
    const linkElements = compiledElement.querySelectorAll('button[routerLinkActive="bg-amber-200"]');
    expect(linkElements.length).toBe(3);
  });

  it('There should be a button onclick of which menu should open', () => {
    const linkElements = compiledElement.querySelector('button[matMenuTriggerFor="navMenu"]');
    expect(linkElements).toBeTruthy();
  }); */
  /* it('there should be mat-menu with name navMenu', () => {
    const linkElements = compiledElement.querySelector('mat-menu[#navMenu="matMenu"]');
    expect(linkElements).toBeTruthy();
  });

  it('There should be a youtube link in the menu', () => {
    const linkElements = compiledElement.querySelector('a[href="https://youtube.com/channel/UCjPXRasfLq-trjZ5vSYgiDg?si=rEEw5EYl3wKswHh7"]');
    expect(linkElements).toBeTruthy();
  });

  it('Youtube link should have correct text', () => {
    const linkElements = compiledElement.querySelector('a[href="https://youtube.com/channel/UCjPXRasfLq-trjZ5vSYgiDg?si=rEEw5EYl3wKswHh7"]'); 
    expect(linkElements?.textContent).toContain('गैलरी');
  });

  it('There should be a matmenu link for useful mantras', () => {
    const linkElements = compiledElement.querySelector('button[routerLink="/useful-mantra"]');
    expect(linkElements).toBeTruthy();
    expect(linkElements?.textContent).toContain('किछू उपयोगी मंत्र');
  });

  it('There should be an matmenu item for our leaders link', () => {
    const linkElements = compiledElement.querySelector('button[routerLink="/leaders"]');
    expect(linkElements).toBeTruthy();
    expect(linkElements?.textContent).toContain('हमर विभूति');
  }); */
  /* it('Should display home component as default', () => {
    const homeComponent = compiledElement.querySelector('app-home');
    expect(homeComponent).toBeTruthy();
  }); */
  it('Should display calendar component when navigating to calendar route', async() => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/calendar');
    const calendarComponent = harness.fixture.debugElement.query(By.directive(Calendar));
    expect(calendarComponent).toBeTruthy();
  });
  it('Should display leaders component when navigating to leaders route', async() => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/leaders');
    const leadersComponent = harness.fixture.debugElement.query(By.directive(OurLeader));
    expect(leadersComponent).toBeTruthy();
  });
  it('Should display useful mantras component when navigating to useful mantras route', async() => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/useful-mantra');
    const usefulMantraComponent = harness.fixture.debugElement.query(By.directive(UsfulMantra));
    expect(usefulMantraComponent).toBeTruthy();
  });
  it('Should display aarti component when navigating to aarti route', async() => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/aarti');
    const aartiComponent = harness.fixture.debugElement.query(By.directive(Aarti));
    expect(aartiComponent).toBeTruthy();
  });
});