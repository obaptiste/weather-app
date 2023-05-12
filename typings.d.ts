interface CurrentWeather {
  is_day: number
  temperature: number
  time: string
  weathercode: number
  winddirection: number
  windspeed: number
}

interface Daily {
  apparent_temperature_max: [number]
  precipitation_hours: [number]
  precipitation_sum: [number]
  shortwave_radiation_sum: [number]
  sunrise: [string]
  sunset: [string]
  temperature_2m_max: [number]
  temperature_2m_min: [number]
  time: [string]
  uv_index_clear_sky_max: [number]
  uv_index_max: [number]
  weathercode: [number]
  winddirection_10m_dominant: [number]
  windspeed_10m_max: [number]
}
interface DailyUnits {
  apparent_temperature_max: String
  precipitation_hours: String
  precipitation_sum: String
  shortwave_radiation_sum: String
  sunrise: String
  sunset: String
  temperature_2m_max: String
  temperature_2m_min: String
  time: String
  uv_index_clear_sky_max: String
  uv_index_max: String
  weathercode: String
  winddirection_10m_dominant: String
  windspeed_10m_max: String
}
interface Hourly {
  apparent_temperature: String
  cloudcover: String
  dewpoint_2m: String
  direct_normal_irradiance_instant: String
  direct_radiation: String
  evapotranspiration: String
  freezinglevel_height: String
  is_day: String
  precipitation: String
  precipitation_probability: String
  rain: String
  relativehumidity_2m: String
  shortwave_radiation: String
  showers: String
  snowfall: String
  soil_moisture_0_1cm: String
  soil_moisture_1_3cm: String
  soil_moisture_3_9cm: String
  soil_temperature_0cm: String
  soil_temperature_18cm: String
  soil_temperature_6cm: String
  surface_pressure: String
  temperature_2m: String
  terrestrial_radiation_instant: String
  time: String
  uv_index: String
  uv_index_clear_sky: String
  vapor_pressure_deficit: String
  visibility: String
  weathercode: String
  winddirection_10m: String
  windgusts_10m: String
  windspeed_10m: String
}

interface Root {
  current_weather: CurrentWeather
  daily: Daily
  daily_units: DailyUnits
  elevation: number
  generationtime_ms: number
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number
  longitude: number
  timezone: String
  timezone_abbreviation: String
  utc_offset_seconds: number
}