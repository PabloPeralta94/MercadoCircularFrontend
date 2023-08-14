import { Component, OnInit } from '@angular/core';
import { FishingGear } from 'src/app/interfaces/fishing-gear';
import { FishingGearService } from 'src/app/services/fishing-gear.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  fishingGearList: FishingGear[];

  constructor(private fishingGearService: FishingGearService) {}

  ngOnInit() {
    this.loadFishingGearList();
  }

  loadFishingGearList() {
    this.fishingGearService.getAllFishingGear().subscribe(
      (gearList: FishingGear[]) => {
        this.fishingGearList = gearList;
      },
      (error) => {
        console.error('Error loading fishing gear:', error);
      }
    );
  }
}
