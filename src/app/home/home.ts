import { Component, signal } from '@angular/core';
import { caroselList } from '../Models/carosel';
import { MyCarosel } from "../my-carosel/my-carosel";
import { harsuwahniItihass } from '../Models/harsuwahni-itihass';

@Component({
  selector: 'app-home',
  imports: [MyCarosel],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
   imageList = signal(caroselList);
   hdpItihass = signal(harsuwahniItihass);
}
