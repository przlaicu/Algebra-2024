import { Component } from 'react';
import CurrentWeather from './CurrentWeather';

export default class WeatherForecast extends Component {

    render() {
    const forecastData = [
        {day: 'Monday', high: 24, low: 18, conditions: 'Sunny'},
        {day: 'Tuesday', high: 27, low: 20, conditions: 'Clear'},
        {day: 'Wednesday', high: 25, low: 19, conditions:'Partly Cloudy'},
        {day: 'Thursday', high: 23, low: 17, conditions: 'Rainy'},
        {day: 'Friday', high: 26, low: 20, conditions: 'Sunny'}
    ];
    
    return (
        <div>
            <CurrentWeather />
            <table>
                <thead>
                    <td>Day</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Condition</td>
                </thead>
                <tbody>
                    <td>
                       {forecastData.map(day)}
                    </td>
                    <td>
                       {forecastData.map(high)}
                    </td>
                    <td>
                       {forecastData.map(low)}
                    </td>
                    <td>
                       {forecastData.map(conditions)}
                    </td>
                </tbody>
            </table>

        </div>
    );

    function getData(weatherData) {
        return [weatherData.day, weatherData.high, weatherData.low, weatherData.conditions].join(', ');
    }

    }
}