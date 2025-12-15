import { Component, OnChanges, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink,MatMenuModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  isMobile:boolean|undefined;
  isHandset$:Observable<boolean>;
  
  constructor(private breakpointObserver:BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((state: BreakpointState) => state.matches)
      );
    this.isHandset$.subscribe({
      next:(hasMatched:boolean) => this.isMobile = hasMatched,
      error:(errorData:Error) => {
        console.error('Device detection error.');
      }
    })
  }
  
}
