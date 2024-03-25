import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  checkRestaurantOpen():boolean {
    const data = new Date()
    const hour = data.getHours()
    return hour >= 18 && hour < 22
  }
}
