import React, { useState } from 'react';
import SeatGrid from '../SeatGrid';

const seatsData = [
    [
        { number: '1.A', status: 'standard' },
        { number: '1.B', status: 'standard' },
        { number: '1.C', status: 'vip' },
        { number: '1.D', status: 'booked' },
    ],
    [
        { number: '2.A', status: 'standard' },
        { number: '2.B', status: 'vip' },
        { number: '2.C', status: 'standard' },
        { number: '2.D', status: 'booked' },
    ],
    [
        { number: '3.A', status: 'standard' },
        { number: '3.B', status: 'vip' },
        { number: '3.C', status: 'standard' },
        { number: '3.D', status: 'booked' },
    ]
    // Add more rows here
];

const MovieSeatSelection = () => {
    const [selectedDate, setSelectedDate] = useState('May 19');

    return (
        <div className="movieSeatSelection">
            <div>
            <img
                src="https://i.imghippo.com/files/wt8T01727534685.jpg"
                alt="Beauty and the Beast"
                className="moviePoster"
            />
            </div>
            <div>
                <div className="movieDetails">
                    <div>
                        <h1>Beauty and the Beast</h1>
                        <h2>Cinema: GV PlAZA</h2>
                    </div>
                </div>
                <div className="dateSelector">
                    <button onClick={() => setSelectedDate('May 19')}>May 19</button>
                    <button onClick={() => setSelectedDate('May 25')}>May 25</button>
                </div>
                <SeatGrid seats={seatsData} />
            </div>
        </div>
    );
};

export default MovieSeatSelection;
