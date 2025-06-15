import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState, useContext, useEffect } from "react";
import "./calender.css";
import { Thetaskcontext } from "./taskContext";
export default function Calendar() {
  const { task } = useContext(Thetaskcontext);

  const [events, setEvents] = useState(
    task.map((itm) => {
      return { title: itm.theTAsk, date: itm.date };
    })
  );

  useEffect(() => {
    task.map((item) =>
      setEvents([
        ...events,
        {
          title: item.theTAsk,
          date: item.date,
        },
      ])
    );
  }, [task]);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}
