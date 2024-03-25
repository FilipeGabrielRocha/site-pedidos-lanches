import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  checkRestaurantOpen():boolean {
    const data = new Date()
    const hour = data.getHours()
    return hour >= 8 && hour < 22
  }
}
