import { Component, input, OnDestroy, signal} from '@angular/core';
import { Carosel } from '../Models/carosel';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-my-carosel',
  imports: [],
  templateUrl: './my-carosel.html',
  styleUrl: './my-carosel.css',
})
export class MyCarosel implements OnDestroy {
   images = input.required<Carosel[]>();
   activatorIndex = signal(0);
  

   interval$ = interval(5000).subscribe(() => {
    console.log('Interval fired');
    this.activatorIndex.update((currentIndex:number) => {
        if (currentIndex + 1 >= this.images()?.length) {
            return 0;
        } else {
            return currentIndex + 1;
        }
   });
  });
  
  ngOnDestroy() {
    this.interval$.unsubscribe();
  }
}
