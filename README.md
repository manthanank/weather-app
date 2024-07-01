# WeatherApp

WeatherApp is an Angular-based web application designed to provide real-time weather updates. This project utilizes Angular 16.2.14 and is styled with Angular Material.

## Getting Started

To get started with WeatherApp, clone this repository to your local machine and ensure you have [Node.js](https://nodejs.org/) installed.

### Prerequisites

- Node.js
- Angular CLI 16.2.14

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/manthanank/weather-app.git
    ```

2. Install NPM packages:

    ```sh
    npm install
    ```

3. Start the Angular development server:

    ```sh
    ng serve
    ```

4. Navigate to `http://localhost:4200/` in your web browser.

## PWA Setup

To set up WeatherApp as a Progressive Web App (PWA), follow these steps:

Install the Angular PWA schematics:

```sh
ng add @angular/pwa
```

## Running the Project with http-server

To run the project using http-server, follow these steps:

1. Install http-server globally:

    ```sh
    npm install -g http-server
    ```

2. Build the project:

    ```sh
    ng build
    ```

3. Navigate to the `dist/weather-app` directory:

    ```sh
    cd dist/weather-app
    ```

4. Start the http-server:

    ```sh
    npm run server  
    ```

5. Navigate to `http://localhost:8080/` in your web browser.

## Deployment

To deploy the project to Firebase, follow these steps:

1. Install Firebase CLI globally:

    ```sh
    npm install -g firebase-tools
    ```

2. Log in to your Firebase account:

    ```sh
    firebase login
    ```

3. Add AngularFire to your Angular project:

    ```sh
    ng add @angular/fire
    ```

4. Build your Angular project:

    ```sh
    ng build
    ```

5. Initialize Firebase in your project:

    ```sh
    firebase init
    ```

6. Deploy your project to Firebase:

    ```sh
    firebase deploy
    ```

Ensure you have the Firebase CLI installed and have logged in to your Firebase account.

## Usage

WeatherApp is designed to provide real-time weather updates for any city in the world. Simply enter the name of the city you would like to view the weather for and click the "Search" button.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Node.js](https://nodejs.org/)
- [Firebase](https://firebase.google.com/)

This project is from Angular Projects - Build modern web apps with Angular 16 with 10 different projects and cutting-edge technologies by Mark Thompson.
