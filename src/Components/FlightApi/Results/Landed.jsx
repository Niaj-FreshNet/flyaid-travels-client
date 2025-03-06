import React from 'react';
import dayjs from 'dayjs';

const Landed = ({ flightData, airportInfo }) => {
    console.log(flightData);
    const { operationalTimes } = flightData;
    const [arrival, departure] = airportInfo;
    return (
        <div className="">
            <div>
                <div className="flex items-center">
                    <h3>
                        Status : <span className="text-green-600 font-bold">Landed</span>
                    </h3>
                </div>
            </div>
            <div>
                Arrival Time: {dayjs(operationalTimes.actualRunwayArrival.dateLocal).format('LLLL')}
            </div>
            <div className="flex border-2 border-gray-400 p-4 mt-4">
                <div className="flex-1">
                    <h4 className="text-green-600 underline">Arrival:</h4>
                    <div>{arrival.name} ({arrival.fs})</div>
                    <div>{arrival.city}, {arrival.countryName}.</div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-1">
                    <h4 className="text-red-600 underline">Departure:</h4>
                    <div>{departure.name} ({departure.fs})</div>
                    <div>{departure.city}, {departure.countryName}.</div>
                </div>
            </div>
        </div>
    );
};

export default Landed;
