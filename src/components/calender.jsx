import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useContext, useMemo } from "react";
import { Thetaskcontext } from "./taskContext";
import "./calender.css";

export default function Calendar() {
  const { task } = useContext(Thetaskcontext);

  const events = useMemo(() => {
    return task.map((item) => ({
      title: item.theTAsk,
      date: item.date,
      id: item.id || `${item.theTAsk}-${item.date}`,
      backgroundColor: item.done ? "#4CAF50" : "#3a87ad", // Green for done, blue for not done
      borderColor: item.done ? "#388e3c" : "#2c6da0", // Darker shade for border
    }));
  }, [task]);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventDisplay="block"
        eventContent={(eventInfo) => (
          <div
            className={`fc-event-main ${
              eventInfo.event.extendedProps.isDone ? "done-event" : ""
            }`}
          >
            {eventInfo.event.title}
          </div>
        )}
      />
    </div>
  );
}
