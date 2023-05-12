import { gql } from "@apollo/client"

const fetchWeatherQuery = gql`
    query myQuery(
      $current_weather: String
      $daily: String = "apparent_temperature_max,precipitation_hours,shortwave_radiation_sum,uv_index_max,sunrise"
      $hourly: String 
      $latitude: String! 
      $longitude: String!
      $timezone: String!
    ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      elevation
      generationtime_ms
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        precipitation_hours
        precipitation_sum
        shortwave_radiation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        precipitation_hours
        precipitation_sum
        shortwave_radiation_sum
        sunrise
        sunset
        temperature_2m_max        
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windspeed_10m_max
      }
      hourly {
        apparent_temperature
        cloudcover
        dewpoint_2m
        direct_normal_irradiance_instant
        direct_radiation
        evapotranspiration
        freezinglevel_height
        is_day
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        shortwave_radiation
        showers
        snowfall
        soil_moisture_0_1cm
        soil_moisture_1_3cm
        soil_moisture_3_9cm
        soil_temperature_0cm
        soil_temperature_18cm
        soil_temperature_6cm
        surface_pressure
        temperature_2m
        terrestrial_radiation_instant
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
        winddirection_10m
        windgusts_10m
        windspeed_10m
      }
      hourly_units {
        apparent_temperature
        cloudcover
        dewpoint_2m
        direct_normal_irradiance_instant
        direct_radiation
        evapotranspiration
        freezinglevel_height
        is_day
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        shortwave_radiation
        showers
        snowfall
        soil_moisture_0_1cm
        soil_moisture_1_3cm
        soil_moisture_3_9cm
        soil_temperature_0cm
        soil_temperature_18cm
        soil_temperature_6cm
        surface_pressure
        temperature_2m
        terrestrial_radiation_instant
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
        winddirection_10m
        windgusts_10m
        windspeed_10m
      }
    }
  }
`;


export default fetchWeatherQuery