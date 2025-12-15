import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Aartilist, AartiObj } from '../Models/aarti';

@Component({
  selector: 'app-aarti',
  imports: [MatExpansionModule],
  templateUrl: './aarti.html',
  styleUrl: './aarti.css',
})
export class Aarti {
   aartiList = signal<AartiObj[]>(Aartilist)
}
