import { gql } from "@apollo/client"

const fetchWeatherQuery = gql`
  # query FetchWeather($current_weather: String, $daily: String, $hourly: String, $latitude: Float!, $longitude:Float!, $models:String, $timezone:String!) {
    query myQuery($current_weather: String, $daily: String, $hourly: String, $latitude: String, $longitude: String, $models: String, $timezone: String) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      models: $models
      timezone: $timezone
    ) {
      elevation
      generationtime_ms
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      latitude
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max_best_match
        apparent_temperature_max_gfs_global
        apparent_temperature_max_icon_seamless
        apparent_temperature_max_meteofrance_arome_france_hd
        apparent_temperature_min_best_match
        apparent_temperature_min_gfs_global
        apparent_temperature_min_icon_seamless
        apparent_temperature_min_meteofrance_arome_france_hd
        precipitation_hours_best_match
        precipitation_hours_ecmwf_ifs04
        precipitation_hours_gfs_global
        precipitation_hours_icon_seamless
        precipitation_hours_meteofrance_arome_france_hd
        precipitation_probability_max_best_match
        precipitation_probability_max_gfs_global
        precipitation_sum_best_match
        precipitation_sum_ecmwf_ifs04
        precipitation_sum_gfs_global
        precipitation_sum_icon_seamless
        rain_sum_best_match
        rain_sum_gfs_global
        precipitation_sum_meteofrance_arome_france_hd
        rain_sum_icon_seamless
        shortwave_radiation_sum_best_match
        shortwave_radiation_sum_gfs_global
        shortwave_radiation_sum_icon_seamless
        shortwave_radiation_sum_meteofrance_arome_france_hd
        showers_sum_best_match
        showers_sum_gfs_global
        showers_sum_icon_seamless
        sunrise
        sunset
        temperature_2m_max_best_match
        temperature_2m_max_ecmwf_ifs04
        temperature_2m_max_gfs_global
        temperature_2m_max_icon_seamless
        temperature_2m_max_meteofrance_arome_france_hd
        temperature_2m_min_best_match
        temperature_2m_min_gfs_global
        temperature_2m_min_ecmwf_ifs04
        temperature_2m_min_icon_seamless
        temperature_2m_min_meteofrance_arome_france_hd
        time
        uv_index_clear_sky_max_best_match
        uv_index_clear_sky_max_gfs_global
        uv_index_max_best_match
        winddirection_10m_dominant_best_match
        uv_index_max_gfs_global
        winddirection_10m_dominant_gfs_global
        winddirection_10m_dominant_ecmwf_ifs04
        winddirection_10m_dominant_icon_seamless
        winddirection_10m_dominant_meteofrance_arome_france_hd
      }
      hourly {
        apparent_temperature_best_match
        apparent_temperature_gfs_global
        apparent_temperature_icon_seamless
        apparent_temperature_meteofrance_arome_france_hd
        cloudcover_best_match
        cloudcover_ecmwf_ifs04
        cloudcover_gfs_global
        cloudcover_icon_seamless
        cloudcover_meteofrance_arome_france_hd
        freezinglevel_height_best_match
        freezinglevel_height_gfs_global
        freezinglevel_height_icon_seamless
        is_day_best_match
        is_day_icon_seamless
        is_day_gfs_global
        is_day_ecmwf_ifs04
        is_day_meteofrance_arome_france_hd
        relativehumidity_2m_best_match
        relativehumidity_2m_gfs_global
        relativehumidity_2m_icon_seamless
        relativehumidity_2m_meteofrance_arome_france_hd
        soil_moisture_27_81cm_best_match
        soil_moisture_27_81cm_icon_seamless
        soil_moisture_3_9cm_best_match
        soil_moisture_3_9cm_icon_seamless
        soil_temperature_54cm_best_match
        soil_temperature_6cm_best_match
        soil_temperature_54cm_icon_seamless
        soil_temperature_6cm_icon_seamless
        temperature_2m_best_match
        temperature_2m_ecmwf_ifs04
        temperature_2m_gfs_global
        temperature_2m_icon_seamless
        temperature_2m_meteofrance_arome_france_hd
        time
        vapor_pressure_deficit_best_match
        vapor_pressure_deficit_gfs_global
        vapor_pressure_deficit_icon_seamless
        vapor_pressure_deficit_meteofrance_arome_france_hd
      }
      daily_units {
        apparent_temperature_max_best_match
        apparent_temperature_max_gfs_global
        apparent_temperature_max_icon_seamless
        apparent_temperature_min_best_match
        apparent_temperature_max_meteofrance_arome_france_hd
        apparent_temperature_min_gfs_global
        apparent_temperature_min_icon_seamless
        apparent_temperature_min_meteofrance_arome_france_hd
        precipitation_hours_best_match
        precipitation_hours_ecmwf_ifs04
        precipitation_hours_gfs_global
        precipitation_hours_icon_seamless
        precipitation_hours_meteofrance_arome_france_hd
        precipitation_probability_max_best_match
        precipitation_probability_max_gfs_global
        precipitation_sum_best_match
        precipitation_sum_ecmwf_ifs04
        precipitation_sum_gfs_global
        precipitation_sum_icon_seamless
        precipitation_sum_meteofrance_arome_france_hd
        rain_sum_best_match
        rain_sum_gfs_global
        rain_sum_icon_seamless
        shortwave_radiation_sum_best_match
        shortwave_radiation_sum_gfs_global
        shortwave_radiation_sum_icon_seamless
        shortwave_radiation_sum_meteofrance_arome_france_hd
        showers_sum_best_match
        showers_sum_gfs_global
        showers_sum_icon_seamless
        sunrise
        sunset
        temperature_2m_max_best_match
        temperature_2m_max_ecmwf_ifs04
        temperature_2m_max_gfs_global
        temperature_2m_max_meteofrance_arome_france_hd
        temperature_2m_max_icon_seamless
        temperature_2m_min_best_match
        temperature_2m_min_ecmwf_ifs04
        temperature_2m_min_gfs_global
        temperature_2m_min_icon_seamless
        temperature_2m_min_meteofrance_arome_france_hd
        time
        uv_index_clear_sky_max_best_match
        uv_index_clear_sky_max_gfs_global
        uv_index_max_best_match
        uv_index_max_gfs_global
        winddirection_10m_dominant_best_match
        winddirection_10m_dominant_ecmwf_ifs04
        winddirection_10m_dominant_gfs_global
        winddirection_10m_dominant_icon_seamless
        winddirection_10m_dominant_meteofrance_arome_france_hd
      }
      hourly_units {
        apparent_temperature_best_match
        apparent_temperature_gfs_global
        apparent_temperature_icon_seamless
        apparent_temperature_meteofrance_arome_france_hd
        cloudcover_best_match
        cloudcover_ecmwf_ifs04
        cloudcover_gfs_global
        cloudcover_icon_seamless
        cloudcover_meteofrance_arome_france_hd
        freezinglevel_height_best_match
        freezinglevel_height_gfs_global
        freezinglevel_height_icon_seamless
        is_day_best_match
        is_day_ecmwf_ifs04
        is_day_gfs_global
        is_day_icon_seamless
        is_day_meteofrance_arome_france_hd
        vapor_pressure_deficit_meteofrance_arome_france_hd
        vapor_pressure_deficit_icon_seamless
        vapor_pressure_deficit_gfs_global
        vapor_pressure_deficit_best_match
        time
        temperature_2m_meteofrance_arome_france_hd
        temperature_2m_icon_seamless
        temperature_2m_gfs_global
        temperature_2m_ecmwf_ifs04
        temperature_2m_best_match
        soil_temperature_6cm_icon_seamless
        soil_temperature_6cm_best_match
        soil_temperature_54cm_icon_seamless
        soil_temperature_54cm_best_match
        soil_moisture_3_9cm_icon_seamless
        soil_moisture_3_9cm_best_match
        soil_moisture_27_81cm_icon_seamless
        soil_moisture_27_81cm_best_match
        relativehumidity_2m_meteofrance_arome_france_hd
        relativehumidity_2m_icon_seamless
        relativehumidity_2m_gfs_global
        relativehumidity_2m_best_match
      }
    }
  }
`;


export default fetchWeatherQuery