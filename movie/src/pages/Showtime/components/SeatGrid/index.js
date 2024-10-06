import React, { useState } from 'react';
import Seat from '../Seat';

const SeatGrid = ({ seats }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSelectSeat = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div className="seatGrid">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seatRow">
          {row.map((seat, seatIndex) => (
            <Seat 
              key={seatIndex} 
              seat={seat.number} 
              status={seat.status} 
              onSelect={handleSelectSeat} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
