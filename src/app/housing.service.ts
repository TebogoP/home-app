import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [

  ];
  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted! ${firstName} ${lastName} (${email})`);
    alert(`Your application has been submitted! ${firstName} ${lastName} (${email})`);
  }
}
