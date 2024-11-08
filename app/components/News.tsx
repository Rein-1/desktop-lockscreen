/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from 'react';

// TypeScript types for the weather data response
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const News: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your own API Key from OpenWeather
  const apiKey = '1a246908736b46c3a58140145240811';
  const city = 'New York'; // You can change this to any city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data on component mount
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: WeatherData = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [apiUrl]);

  return (
    <div className='flex flex-wrap justify-center gap-5 md:justify-between border mx-56'>
      <div className='border'>
        <h2>Weather</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather ? (
          <div>
            <p>City: {weather.name}</p>
            {/* Safe check for weather.main */}
            {weather.main && weather.main.temp ? (
              <p>Temperature: {weather.main.temp}°C</p>
            ) : (
              <p>Temperature data unavailable</p>
            )}
            {weather.weather && weather.weather[0] && (
              <p>Weather: {weather.weather[0].description}</p>
            )}
          </div>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
      <div className='border'>Markets</div>
      <div className='border'>Traffic</div>
      <div className='border'>Trending</div>
    </div>
  );
};

export default News;

