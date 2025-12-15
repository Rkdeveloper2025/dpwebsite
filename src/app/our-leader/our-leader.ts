import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LeaderList } from '../Models/our-leader';

@Component({
  selector: 'app-our-leader',
  imports: [MatExpansionModule],
  templateUrl: './our-leader.html',
  styleUrl: './our-leader.css',
})
export class OurLeader {
   leaderList = LeaderList;
}
