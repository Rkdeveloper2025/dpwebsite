import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CalendarData, DisplayPanchangData, SunTimer } from '../Models/panchang-types';
import { CommonModule } from '@angular/common';
import { DayList, GetPanchangCalcuculation, GetPanchangData, GetSunTimer, MonthList } from '../services/panchang-utility';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
   dayList = DayList;
   monthList = MonthList;
   selectedDate = signal(new Date());
   selectedCalendar: CalendarData | undefined;
   firstDateOfMonth = signal(new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth(), 1,0,0,0,0));
   lastDateOfMonth = signal(new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth() + 1, 0,0,0,0,0));
   dateList = signal<number[]>([]);
   lattitude:number = 26.3483;
   longitude:number = 86.0712;
   panchangData:DisplayPanchangData | undefined;
   panchangSunTimer:SunTimer | undefined;
   constructor(private changeDetector:ChangeDetectorRef) {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lattitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.selectedCalendar = GetPanchangData(this.selectedDate(), this.lattitude, this.longitude);
            this.panchangData = GetPanchangCalcuculation(this.selectedDate());
            this.panchangSunTimer = GetSunTimer(this.selectedDate(), this.lattitude, this.longitude);
            this.changeDetector.detectChanges();
               });       
        }
        else 
        {
            this.selectedCalendar = GetPanchangData(this.selectedDate(), this.lattitude, this.longitude);
            this.panchangData = GetPanchangCalcuculation(this.selectedDate());
            this.panchangSunTimer = GetSunTimer(this.selectedDate(), this.lattitude, this.longitude);
        }
               
    
    //console.log(this.selectedCalendar);
    this.populateDateList();
   }
   
   
   populateDateList() {
       let dateCount= 1;
       let dateCountArray = []
       while(dateCount <= this.lastDateOfMonth().getDate()) {
           dateCountArray.push(dateCount);
           dateCount++;
       }
        this.dateList.set(dateCountArray);
    }
    goToPreviousMonth() {
        let dt = new Date();
        dt.setFullYear(this.selectedDate().getFullYear());
        dt.setMonth(this.selectedDate().getMonth() -1);
        dt.setDate(this.selectedDate().getDate());

        this.selectedDate.set(dt);
        this.firstDateOfMonth.set( new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth(), 1,0,0,0,0));
        this.lastDateOfMonth.set( new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth() + 1, 0,0,0,0,0));
        this.selectedCalendar = GetPanchangData(this.selectedDate(), this.lattitude, this.longitude);
        this.panchangData = GetPanchangCalcuculation(this.selectedDate());
        this.panchangSunTimer = GetSunTimer(this.selectedDate(), this.lattitude, this.longitude);
        this.populateDateList();
    }
    goToNextMonth() {
        let dt = new Date();
        dt.setFullYear(this.selectedDate().getFullYear());
        dt.setMonth(this.selectedDate().getMonth() + 1);
        dt.setDate(this.selectedDate().getDate());

        this.selectedDate.set(dt);
        this.firstDateOfMonth.set(new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth(), 1,0,0,0,0));
        this.lastDateOfMonth.set(new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth() + 1, 0,0,0,0,0));
        this.selectedCalendar = GetPanchangData(this.selectedDate(), this.lattitude, this.longitude);
        this.panchangData = GetPanchangCalcuculation(this.selectedDate());
        this.panchangSunTimer = GetSunTimer(this.selectedDate(), this.lattitude, this.longitude);
        this.populateDateList();
    }
    selecteDate(event: any) {
        let val = +event.target.innerText;
        let dt = new Date();
        dt.setFullYear(this.selectedDate().getFullYear());
        dt.setMonth(this.selectedDate().getMonth());
        dt.setDate(val);

        /* this.selectedDate.set(dt);
        this.selectedCalendar = GetPanchangData(this.selectedDate(), this.lattitude, this.longitude); */
        this.panchangData = GetPanchangCalcuculation(dt);
            this.panchangSunTimer = GetSunTimer(dt, this.lattitude, this.longitude);
    }
   
}
