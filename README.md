
# Weather App

## Introduction
This is a user-friendly weather forecasting app that provides real-time weather updates and a forecast for up to 7 days. Users can select from predefined cities and view the current weather conditions, including temperature, and a daily forecast. The app dynamically fetches weather data using the OpenWeather API and provides a responsive and visually appealing interface.

## Deployed App

- **Deploy Link**: [Weather App](https://weatherapp-cyan-phi.vercel.app/) 

## Directory Structure

```
Weather-App
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── logo192.png
│   └── logo512.png
│
├── src/
│   ├── components/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package.json
├── README.md
└── .env
```

## Technology Stack

### Front-end:
- React.js
- CSS
- JavaScript
- React Icons (FontAwesome)

### API:
- OpenWeather API for fetching real-time weather data and forecasts.

## Features
- **Real-Time Weather Updates**: Displays current weather conditions for selected cities.
- **7-Day Weather Forecast**: Users can configure the number of forecast days (up to 7).
- **City Selection**: Predefined city options include:
  - Ho Chi Minh
  - Singapore
  - Kuala Lumpur
  - Tokyo
  - Athens
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile screens.
- **Persistent State**: Selected city persists across page refreshes using `localStorage`.

## Screenshots

### Weather Forecast 
![image](https://github.com/user-attachments/assets/5920e689-fc09-4d20-bdb1-5497329db420)




### City Selection
![image](https://github.com/user-attachments/assets/1c96533c-5b4f-42d6-b4d8-33fe5721547e)


## How to Run the App Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/shivanijpatil/Weather-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Contributors
- Contributor: [Shivani Patil](https://github.com/shivanijpatil)
