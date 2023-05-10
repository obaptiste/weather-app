import React from 'react'
import { getClient } from '../../../../../../apollo.client';
import fetchWeatherQuery from '../../../../../../graphql/queries/fetchWeatherQueries';
import CalloutCard from '@/app/components/CalloutCard';
import StatCard from '@/app/components/StatCard';

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
    const client = getClient();

    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: "true",
            longitude: long,
            latitude: lat,
            timezone: "GMT"
        },
    });

    const results: Root = data.myQuery;

    console.log(results);

    return (
        <div>
            {/* information panel */}
            <div>
                <h2 className="text-xl font-bold">Today's Overview</h2>
                <p className="text-sm txt-gray-400">Last updated at: {""}
                    {new Date(results.current_weather.time).toLocaleString()} (
                    {results.timezone}
                    )
                </p>
            </div>
            <div>
                <CalloutCard message={'This is where GPT4 summary will go'} />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                <StatCard
                title="Maximum Temperature"
                metric={`${results.current_weather.temperature}°`}
                color="green"
                />
                {Number(results.daily?.uv_index_max_best_match[0].toFixed(1)) > 5 && (
                    <CalloutCard
                        message={"The UV is high today, be sureto wear SPF!"}
                        warning/>
                )}
            </div>
            <div className="flex space-x-3">
                 <StatCard
                    title="Wind Speed"
                    metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                    color="cyan"
                />
                 <StatCard
                    title="Wind Direction"
                    metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                    color="violet"
                />
            </div>
        </div>
    )
}

export default WeatherPage
