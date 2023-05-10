import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Image from "next/image";
import CityPicker from './CityPicker';

type Props = {
    city: string;
    results: string;
    lat: string;
    long: string;
}

function InformationPanel({city, lat, long, results}: Props) {
  return (
    <div>
      <h1>{decodeURI(city)}</h1>
      <p>Long/Lat: {long}, {lat}</p>
    </div>
  )
}

export default InformationPanel
