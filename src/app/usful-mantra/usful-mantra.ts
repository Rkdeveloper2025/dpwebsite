import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MantraList } from '../Models/usefuls-mantras';

@Component({
  selector: 'app-usful-mantra',
  imports: [MatExpansionModule],
  templateUrl: './usful-mantra.html',
  styleUrl: './usful-mantra.css',
})
export class UsfulMantra {
  mantralist = MantraList;
}
