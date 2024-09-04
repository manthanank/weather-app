import { Component } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weather: Weather | undefined;
  errorMessage: string | undefined;

  constructor(private weatherService: WeatherService) {}

  search(city: string) {
    if (!city || city.trim() === '') {
      this.errorMessage = 'Please enter a valid city name.';
      return;
    }

    this.errorMessage = undefined; // Clear any previous error message
    this.weatherService.getWeather(city).subscribe({
      next: (weather) => {
        this.weather = weather;
        this.errorMessage = undefined; // Clear error message on successful response
      },
      error: (error) => {
        if (error.error.cod === '404') {
          this.errorMessage = 'City not found. Please enter a valid city name.';
        } else {
          this.errorMessage = 'Failed to fetch weather data.';
        }
      },
    });
  }
}
