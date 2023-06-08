import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BookCard } from 'src/app/interfaces/blocks.interface';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { BestSellersHistoryService } from 'src/app/services/best-sellers-history.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  booksData;
  isLoaded = true;

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor(private _myservice: BestSellersHistoryService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  async ngOnInit(): Promise<void> {
    this.isLoaded = true;
    (await this._myservice.getBooks()).subscribe(
      (data) => {
        (this.booksData = data), console.log(this.booksData);
        this.isLoaded = false;
      },
      (error) => console.log('err')
    );
  }
}
