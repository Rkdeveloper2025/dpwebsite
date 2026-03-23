import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar } from './calendar';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Calendar', () => {
  let component: Calendar;
  let fixture: ComponentFixture<Calendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have dayList and monthList defined', () => {
    expect(component.dayList.length).toBe(7);
    expect(component.monthList.length).toBe(12);
  });

  it ('should have selectedDate initialized to today', () => {
    const today = new Date();
    const selectedDate = component.selectedDate();
    expect(selectedDate.getDate()).toBe(today.getDate());
    expect(selectedDate.getMonth()).toBe(today.getMonth());
    expect(selectedDate.getFullYear()).toBe(today.getFullYear());
  });

  it ('should populate dateList correctly for the selected month', () => {
    component.populateDateList();
    const firstDate = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth(), 1);
    const lastDate = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth() + 1, 0);
    const expectedDates = [];
    for (let d = new Date(firstDate); d <= lastDate; d.setDate(d.getDate() + 1)) {
      expectedDates.push(new Date(d));
    }
    expect(component.dateList().length).toBe(expectedDates.length);
  });

  it ('should update selectedDate correctly on goToPreviousMonth and goToNextMonth', () => {
    const initialDate = new Date(component.selectedDate());
    component.goToPreviousMonth();
    const prevMonthDate = new Date(initialDate.getFullYear(), initialDate.getMonth() - 1, initialDate.getDate());
    expect(component.selectedDate().getMonth()).toBe(prevMonthDate.getMonth());
    expect(component.selectedDate().getFullYear()).toBe(prevMonthDate.getFullYear());
    component.goToNextMonth();
    component.goToNextMonth();
    const nextMonthDate = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, initialDate.getDate());
    expect(component.selectedDate().getMonth()).toBe(nextMonthDate.getMonth());
    expect(component.selectedDate().getFullYear()).toBe(nextMonthDate.getFullYear());
   });

   it ('should update vratList and todaysVrat on month navigation', () => {
    component.goToPreviousMonth();
    expect(component.vratList().length).toBeGreaterThan(0);
    const todaysVratPrev = component.todaysVrat;
    component.goToNextMonth();
    expect(component.vratList().length).toBeGreaterThan(0);
    const todaysVratNext = component.todaysVrat;
    if (todaysVratPrev && todaysVratNext) {
      expect(todaysVratPrev).not.toBe(todaysVratNext);
    }
   });

   it ('should have lattitude and longitude defined', () => {
    expect(component.lattitude).toBeDefined();
    expect(component.longitude).toBeDefined();
   });

   it ('should have selectedCalendar, panchangSunTimer, and panchangData defined after initialization', () => {
    expect(component.selectedCalendar).toBeDefined();
    expect(component.panchangSunTimer).toBeDefined();
    expect(component.panchangData).toBeDefined();
   });

   it ('should have firstDateOfMonth and lastDateOfMonth set correctly after initialization', () => {
    const firstDate = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth(), 1);
    const lastDate = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth() + 1, 0);
    expect(component.firstDateOfMonth().getDate()).toBe(firstDate.getDate());
    expect(component.firstDateOfMonth().getMonth()).toBe(firstDate.getMonth());
    expect(component.firstDateOfMonth().getFullYear()).toBe(firstDate.getFullYear());
    expect(component.lastDateOfMonth().getDate()).toBe(lastDate.getDate());
    expect(component.lastDateOfMonth().getMonth()).toBe(lastDate.getMonth());
    expect(component.lastDateOfMonth().getFullYear()).toBe(lastDate.getFullYear());
   });

   it ('should populate dateList correctly after month navigation', () => {
    component.goToPreviousMonth();
    const firstDatePrev = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth(), 1);
    const lastDatePrev = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth() + 1, 0);
    const expectedDatesPrev = []; 
    for (let d = new Date(firstDatePrev); d <= lastDatePrev; d.setDate(d.getDate() + 1)) {
      expectedDatesPrev.push(new Date(d));
    }
    expect(component.dateList().length).toBe(expectedDatesPrev.length);
    component.goToNextMonth();
    const firstDateNext = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth(), 1);
    const lastDateNext = new Date(component.selectedDate().getFullYear(), component.selectedDate().getMonth() + 1, 0);
    const expectedDatesNext = [];
    for (let d = new Date(firstDateNext); d <= lastDateNext; d.setDate(d.getDate() + 1)) {
      expectedDatesNext.push(new Date(d));
    }
    expect(component.dateList().length).toBe(expectedDatesNext.length);
   });

   /* it ('should have todaysVrat updated correctly after month navigation', () => {
    component.goToPreviousMonth();
    const todaysVratPrev = component.todaysVrat;
    component.goToNextMonth();
    const todaysVratNext = component.todaysVrat;
    expect(todaysVratPrev).not.toBe(todaysVratNext);
   }); */

   it ('should have vratList populated correctly after month navigation', () => {
    component.goToPreviousMonth();
    expect(component.vratList().length).toBeGreaterThan(0);
    component.goToNextMonth();
    expect(component.vratList().length).toBeGreaterThan(0);
   });

   it ('should have dateList populated correctly after month navigation', () => {
    component.goToPreviousMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
    component.goToNextMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
   });

   it ('should have panchangData updated correctly after month navigation', () => {
    const initialPanchangData = component.panchangData;
    component.goToPreviousMonth();
    expect(component.panchangData).not.toEqual(initialPanchangData);
    const panchangDataAfterPrev = component.panchangData;
    component.goToNextMonth();
    expect(component.panchangData).not.toEqual(panchangDataAfterPrev);
   });

   it ('should have selectedCalendar updated correctly after month navigation', () => {
    const initialSelectedCalendar = component.selectedCalendar;
    component.goToPreviousMonth();
    expect(component.selectedCalendar).not.toEqual(initialSelectedCalendar);
    const selectedCalendarAfterPrev = component.selectedCalendar;
    component.goToNextMonth();
    expect(component.selectedCalendar).not.toEqual(selectedCalendarAfterPrev);
   });

   it ('should have panchangSunTimer updated correctly after month navigation', () => {
    const initialPanchangSunTimer = component.panchangSunTimer;
    component.goToPreviousMonth();
    expect(component.panchangSunTimer).not.toEqual(initialPanchangSunTimer);
    const panchangSunTimerAfterPrev = component.panchangSunTimer;
    component.goToNextMonth();
    expect(component.panchangSunTimer).not.toEqual(panchangSunTimerAfterPrev);
   });

   it ('should have firstDateOfMonth and lastDateOfMonth updated correctly after month navigation', () => {
    const initialFirstDateOfMonth = component.firstDateOfMonth();
    const initialLastDateOfMonth = component.lastDateOfMonth();
    component.goToPreviousMonth();
    expect(component.firstDateOfMonth()).not.toEqual(initialFirstDateOfMonth);
    expect(component.lastDateOfMonth()).not.toEqual(initialLastDateOfMonth);
    const firstDateOfMonthAfterPrev = component.firstDateOfMonth();
    const lastDateOfMonthAfterPrev = component.lastDateOfMonth();
    component.goToNextMonth();
    expect(component.firstDateOfMonth()).not.toEqual(firstDateOfMonthAfterPrev);
    expect(component.lastDateOfMonth()).not.toEqual(lastDateOfMonthAfterPrev);
   });

   it ('should have lattitude and longitude unchanged after month navigation', () => {
    const initialLattitude = component.lattitude;
    const initialLongitude = component.longitude;
    component.goToPreviousMonth();
    expect(component.lattitude).toBe(initialLattitude);
    expect(component.longitude).toBe(initialLongitude);
    component.goToNextMonth();
    expect(component.lattitude).toBe(initialLattitude);
    expect(component.longitude).toBe(initialLongitude);
   });

   it ('should have dayList and monthList unchanged after month navigation', () => {
    const initialDayList = component.dayList;
    const initialMonthList = component.monthList;
    component.goToPreviousMonth();
    expect(component.dayList).toBe(initialDayList);
    expect(component.monthList).toBe(initialMonthList);
    component.goToNextMonth();
    expect(component.dayList).toBe(initialDayList);
    expect(component.monthList).toBe(initialMonthList);
   });

   it ('should have selectedDate updated correctly after multiple month navigations', () => {
    const initialDate = new Date(component.selectedDate());
    component.goToPreviousMonth();
    component.goToPreviousMonth();
    const twoMonthsBackDate = new Date(initialDate.getFullYear(), initialDate.getMonth() - 2, initialDate.getDate());
    expect(component.selectedDate().getMonth()).toBe(twoMonthsBackDate.getMonth());
    expect(component.selectedDate().getFullYear()).toBe(twoMonthsBackDate.getFullYear());
    component.goToNextMonth();
    const oneMonthBackDate = new Date(initialDate.getFullYear(), initialDate.getMonth() - 1, initialDate.getDate());
    expect(component.selectedDate().getMonth()).toBe(oneMonthBackDate.getMonth());
    expect(component.selectedDate().getFullYear()).toBe(oneMonthBackDate.getFullYear());
    component.goToNextMonth();
    expect(component.selectedDate().getMonth()).toBe(initialDate.getMonth());
    expect(component.selectedDate().getFullYear()).toBe(initialDate.getFullYear());
   });

   /* it ('should have vratList and todaysVrat updated correctly after multiple month navigations', () => {
    component.goToPreviousMonth();
    const todaysVratPrev1 = component.todaysVrat;
    component.goToPreviousMonth();
    const todaysVratPrev2 = component.todaysVrat;
    expect(todaysVratPrev1).not.toBe(todaysVratPrev2);
    component.goToNextMonth();
    const todaysVratNext1 = component.todaysVrat;
    expect(todaysVratNext1).toBe(todaysVratPrev1);
    component.goToNextMonth();
    const todaysVratNext2 = component.todaysVrat;
    expect(todaysVratNext2).toBe(component.todaysVrat);
   }); */

   it ('should have dateList populated correctly after multiple month navigations', () => {
    component.goToPreviousMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
    component.goToPreviousMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
    component.goToNextMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
    component.goToNextMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
   });

   it ('should have panchangData, selectedCalendar, and panchangSunTimer updated correctly after multiple month navigations', () => {
    const initialPanchangData = component.panchangData;
    const initialSelectedCalendar = component.selectedCalendar;
    const initialPanchangSunTimer = component.panchangSunTimer;
    component.goToPreviousMonth();
    expect(component.panchangData).not.toEqual(initialPanchangData);
    expect(component.selectedCalendar).not.toEqual(initialSelectedCalendar);
    expect(component.panchangSunTimer).not.toEqual(initialPanchangSunTimer);
    const panchangDataAfterPrev1 = component.panchangData;
    const selectedCalendarAfterPrev1 = component.selectedCalendar;
    const panchangSunTimerAfterPrev1 = component.panchangSunTimer;
    component.goToPreviousMonth();  
    expect(component.panchangData).not.toEqual(panchangDataAfterPrev1);
    expect(component.selectedCalendar).not.toEqual(selectedCalendarAfterPrev1);
    expect(component.panchangSunTimer).not.toEqual(panchangSunTimerAfterPrev1);
    const panchangDataAfterPrev2 = component.panchangData;
    const selectedCalendarAfterPrev2 = component.selectedCalendar;

    const panchangSunTimerAfterPrev2 = component.panchangSunTimer;
    component.goToNextMonth();
    expect(component.panchangData).toEqual(panchangDataAfterPrev1);
    expect(component.selectedCalendar).toEqual(selectedCalendarAfterPrev1);
    expect(component.panchangSunTimer).toEqual(panchangSunTimerAfterPrev1);
    component.goToNextMonth();
    expect(component.panchangData).toEqual(initialPanchangData);
    expect(component.selectedCalendar).toEqual(initialSelectedCalendar);
    expect(component.panchangSunTimer).toEqual(initialPanchangSunTimer);
   });

   it ('should have firstDateOfMonth and lastDateOfMonth updated correctly after multiple month navigations', () => {
    const initialFirstDateOfMonth = component.firstDateOfMonth();
    const initialLastDateOfMonth = component.lastDateOfMonth();
    component.goToPreviousMonth();
    expect(component.firstDateOfMonth()).not.toEqual(initialFirstDateOfMonth);
    expect(component.lastDateOfMonth()).not.toEqual(initialLastDateOfMonth);
    const firstDateOfMonthAfterPrev1 = component.firstDateOfMonth();
    const lastDateOfMonthAfterPrev1 = component.lastDateOfMonth();
    component.goToPreviousMonth();
    expect(component.firstDateOfMonth()).not.toEqual(firstDateOfMonthAfterPrev1);
    expect(component.lastDateOfMonth()).not.toEqual(lastDateOfMonthAfterPrev1);
    const firstDateOfMonthAfterPrev2 = component.firstDateOfMonth();
    const lastDateOfMonthAfterPrev2 = component.lastDateOfMonth();
    component.goToNextMonth();
    expect(component.firstDateOfMonth()).toEqual(firstDateOfMonthAfterPrev1);
    expect(component.lastDateOfMonth()).toEqual(lastDateOfMonthAfterPrev1);
    component.goToNextMonth();
    expect(component.firstDateOfMonth()).toEqual(initialFirstDateOfMonth);
    expect(component.lastDateOfMonth()).toEqual(initialLastDateOfMonth);
   });

   it ('should have lattitude and longitude unchanged after multiple month navigations', () => {
    const initialLattitude = component.lattitude;
    const initialLongitude = component.longitude;
    component.goToPreviousMonth();
    component.goToPreviousMonth();
    expect(component.lattitude).toBe(initialLattitude);
    expect(component.longitude).toBe(initialLongitude);
    component.goToNextMonth();
    component.goToNextMonth();
    expect(component.lattitude).toBe(initialLattitude);
    expect(component.longitude).toBe(initialLongitude);
   });

   it ('should have dayList and monthList unchanged after multiple month navigations', () => {  
    const initialDayList = component.dayList;
    const initialMonthList = component.monthList;
    component.goToPreviousMonth();
    component.goToPreviousMonth();
    expect(component.dayList).toBe(initialDayList);
    expect(component.monthList).toBe(initialMonthList);
    component.goToNextMonth();
    component.goToNextMonth();
    expect(component.dayList).toBe(initialDayList);
    expect(component.monthList).toBe(initialMonthList);
   });
   it ('should handle month navigation at year boundaries correctly', () => {
    component.selectedDate.set(new Date(2024, 0, 15));
    component.firstDateOfMonth.set(new Date(2024, 0, 1));
    component.lastDateOfMonth.set(new Date(2024, 0, 31));
    component.goToPreviousMonth();
    expect(component.selectedDate().getMonth()).toBe(11);
    expect(component.selectedDate().getFullYear()).toBe(2023);
    component.goToNextMonth();
    expect(component.selectedDate().getMonth()).toBe(0);
    expect(component.selectedDate().getFullYear()).toBe(2024);
   });

   it ('should handle month navigation for months with different number of days correctly', () => {
    component.selectedDate.set(new Date(2024, 0, 31));
    component.firstDateOfMonth.set(new Date(2024, 0, 1));
    component.lastDateOfMonth.set(new Date(2024, 0, 31));
    component.goToNextMonth();
    expect(component.selectedDate().getMonth()).toBe(1);
    expect(component.selectedDate().getDate()).toBe(29);
    component.goToPreviousMonth();
    expect(component.selectedDate().getMonth()).toBe(0);
    expect(component.selectedDate().getDate()).toBe(29);
   });

   it ('should handle month navigation for leap years correctly', () => {
    component.selectedDate.set(new Date(2020, 1, 29));
    component.firstDateOfMonth.set(new Date(2020, 1, 1));
    component.lastDateOfMonth.set(new Date(2020, 1, 29));
    component.goToNextMonth();
    expect(component.selectedDate().getMonth()).toBe(2);
    expect(component.selectedDate().getDate()).toBe(29);
    component.goToPreviousMonth();
    expect(component.selectedDate().getMonth()).toBe(1);
    expect(component.selectedDate().getDate()).toBe(29);
   });
    it ('should handle month navigation for non-leap years correctly', () => {
    component.selectedDate.set(new Date(2021, 1, 28));
    component.firstDateOfMonth.set(new Date(2021, 1, 1));
    component.lastDateOfMonth.set(new Date(2021, 1, 28));
    component.goToNextMonth();
    expect(component.selectedDate().getMonth()).toBe(2);
    expect(component.selectedDate().getDate()).toBe(28);
    component.goToPreviousMonth();
    expect(component.selectedDate().getMonth()).toBe(1);
    expect(component.selectedDate().getDate()).toBe(28);
   });

   it ('should maintain correct dateList after multiple month navigations', () => {
    component.selectedDate.set(new Date(2024, 0, 15));
    component.firstDateOfMonth.set(new Date(2024, 0, 1));
    component.lastDateOfMonth.set(new Date(2024, 0, 31));
    component.goToPreviousMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
    component.goToNextMonth();
    expect(component.dateList().length).toBeGreaterThan(0);
   });

   
  });