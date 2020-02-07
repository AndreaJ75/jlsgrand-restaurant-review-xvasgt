import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getRestaurantList() {
    return this.httpClient.get('https://jlsgrand-restaurant-api.herokuapp.com/api/restaurants')
  }

  addReviewToRestaurant(restaurantId, review) {
    return this.httpClient.post('https://jlsgrand-restaurant-api.herokuapp.com/api/restaurants/' + restaurantId + '/reviews', review);
  }

  deleteReviewFromRestaurant(restaurantId, reviewId) {
    return this.httpClient.delete('https://jlsgrand-restaurant-api.herokuapp.com/api/restaurants/' + restaurantId + '/reviews/' + reviewId);
  }
}