import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FishingGear } from 'src/app/interfaces/fishing-gear';
import { FishingGearService } from 'src/app/services/fishing-gear.service';
@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent {

  newGear: FishingGear = {
    id: 0, // It will be assigned by the backend upon creation
    name: '',
    description: '',
    price: 0,
    isReel: true, // Default to reel
    model: '',
    timeOfUsage: 'New' // Default to new
  };

  constructor(private fishingGearService: FishingGearService) {}

  onSubmit(gearForm: NgForm) {
    this.fishingGearService.createFishingGear(this.newGear).subscribe(
      (createdGear: FishingGear) => {
        this.showAlert('Equipo añadido successfully!'); // Show the alert
        gearForm.resetForm(); // Reset the form
      },
      (error) => {
        console.error('Error creating new gear:', error);
      }
    );
  }

  showAlert(message: string) {
    window.alert(message); // Use window.alert to show the popup
  }
  
  }

