import { Component, OnChanges, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink, MatMenuModule, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
    
  constructor() {}
  
}
