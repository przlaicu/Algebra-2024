import { Component } from "react";

export default function CurrentWeather() {

    const weatherData = {
    city: 'New York',
    temperature: 22,
    conditions: 'Partly Cloudy',
    humidity: 60,
    windSpeed: 5

    }

    return (
        <div>
        <h1>Functional Component: Current Weather</h1>
        
        <h2>City: {weatherData.city}</h2>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Conditions: {weatherData.conditions}</p>
        <p>Humidity: {weatherData.humidity}</p>
        <p>WindSpeed: {weatherData.windSpeed}</p>

        <br />
    </div>
    );
}