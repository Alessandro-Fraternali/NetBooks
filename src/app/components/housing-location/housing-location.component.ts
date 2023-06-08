import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
