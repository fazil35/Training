import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('chennai');
  const [error, setError] = useState('');
  const apiKey = 'affbb7db1e554c799d34c5873c78015f';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${apiKey}&units=M`);
        
        if (response.status === 200) {
          setWeather(response.data);
          setError('');
        } else {
          setError('Failed to fetch weather data. Please check your API key and location.');
        }
      } catch (error) {
        console.error('Error fetching the weather data:', error);
        setError('Failed to fetch weather data. Please check your API key and location.');
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <WeatherContainer>
      <h3>Weather Widget</h3>
      {weather && (
        <div>
          <p>Temperature: {weather.data[0].temp}°C</p>
          <p>Humidity: {weather.data[0].rh}%</p>
          <p>Conditions: {weather.data[0].weather.description}</p>
        </div>
      )}
      <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter location" />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </WeatherContainer>
  );
};

export default WeatherWidget;
