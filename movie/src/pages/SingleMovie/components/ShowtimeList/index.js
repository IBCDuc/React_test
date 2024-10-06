import React from "react";
import sty from "./TicketSchedule.module.scss"; // Import CSS cho styling

const TicketSchedule = () => {
  const schedules = [
    {
      date: "June 25, 2022",
      times: ["09h30", "12h10", "15h30", "17h20", "21h00"],
    },
    {
      date: "June 26, 2022",
      times: ["11h30", "17h50", "20h30"],
    },
    {
      date: "July 23, 2022",
      times: ["08h00", "12h30", "14h30", "17h50", "22h10"],
    },
  ];

  return (
    <div className={sty.ticketSchedule}>
      {schedules.map((schedule, index) => (
        <div key={index} className={sty.scheduleItem}>
          <h3>{schedule.date}</h3>
          <div className={sty.times}>
            {schedule.times.map((time, i) => (
              <li key={i} className={sty.timeButton}>
                {time}
              </li>
            ))}
          </div>
          <button className={sty.buyButton}>BUY TICKET</button>
        </div>
      ))}
    </div>
  );
};

export default TicketSchedule;
