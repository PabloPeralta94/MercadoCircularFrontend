import { Component, OnInit } from '@angular/core';
import { FishingGear } from 'src/app/interfaces/fishing-gear';
import { FishingGearService } from 'src/app/services/fishing-gear.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  fishingGearList: FishingGear[];
  isAdmin: boolean = false;

  constructor(
    private fishingGearService: FishingGearService,
    private tokenService: TokenService 
    
  ) {}

  ngOnInit() {
    this.loadFishingGearList();
    this.isAdmin = this.tokenService.isAdmin();
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

  deleteGear(gearId: number) {
    this.fishingGearService.deleteFishingGear(gearId).subscribe(
      () => {
        console.log('Fishing gear deleted successfully');
        // Refresh the gear list after successful deletion
        this.loadFishingGearList();
      },
      (error) => {
        console.error('Error deleting fishing gear:', error);
      }
    );
  }
}
