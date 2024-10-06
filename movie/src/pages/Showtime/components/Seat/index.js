import React from 'react';

const Seat = ({ seat, status, onSelect }) => {
  const getSeatClass = () => {
    switch (status) {
      case 'vip':
        return 'vip-seat';
      case 'standard':
        return 'standard-seat';
      case 'booked':
        return 'booked-seat';
      default:
        return '';
    }
  };

  return (
    <button className={`seat ${getSeatClass()}`} onClick={() => onSelect(seat)} disabled={status === 'booked'}>
      {seat}
    </button>
  );
};

export default Seat;
