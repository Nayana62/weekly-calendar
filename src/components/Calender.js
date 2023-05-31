import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Popup from "./Popup";
import "./Calender.css";
import addIcon from "../icons/Add-icon.png";

function Calender() {
  const storedEvents = localStorage.getItem("events");
  const parsedEvents = storedEvents
    ? JSON.parse(storedEvents)
    : [
        {
          id: 0,
          title: "Period 1",
          start: "2023-06-01T09:00:00",
          end: "2023-06-01T10:00:00",
          color: "#F8EBF7",
        },
        {
          id: 1,
          title: "Period 2",
          start: "2023-06-01T11:00:00",
          end: "2023-06-01T12:00:00",
          color: "#E9E8FD",
        },
        {
          id: 2,
          title: "Period 3",
          start: "2023-06-01T13:00:00",
          end: "2023-06-01T14:00:00",
          color: "#FFFBDA",
        },
        {
          id: 3,
          title: "Period 4",
          start: "2023-06-01T16:00:00",
          end: "2023-06-01T17:00:00",
          color: "#CFFFF1",
        },
      ];

  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState(parsedEvents);

  // const [events, setEvents] = useState([
  //   { id: 0, title: 'Period 1', start: '2023-06-01T09:00:00', end: '2023-06-01T10:00:00', color: '#F8EBF7' },
  //   { id: 1, title: 'Period 2', start: '2023-06-01T11:00:00', end: '2023-06-01T12:00:00', color: '#E9E8FD' },
  //   { id: 2, title: 'Period 3', start: '2023-06-01T13:00:00', end: '2023-06-01T14:00:00', color: '#FFFBDA' },
  //   { id: 3, title: 'Period 4', start: '2023-06-01T16:00:00', end: '2023-06-01T17:00:00', color: '#CFFFF1' },
  // ]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  // Save events to local storage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleEventClick = (event) => {
    alert(`Clicked on event: ${event.event.title}`);
  };

  const handleAddEvent = (newEvent) => {
    const id = events.length + 1;
    const eventToAdd = {
      id,
      title: newEvent.title,
      start: `${newEvent.fromDate}T${newEvent.startTime}:00`,
      end: `${newEvent.fromDate}T${newEvent.endTime}:00`,
      repeatOnDays: newEvent.repeatOnDays,
      color: newEvent.color,
    };

    setEvents([...events, eventToAdd]);
    setShowModal(false);
  };

  const handleAddEventClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    
    <div className="calendar-container">
      <div className="add-Btn" onClick={handleAddEventClick}>
        <img src={addIcon} alt="" />
        <button className="btn">Add Event</button>
      </div>
      {showModal && (
        <Popup onClose={handleModalClose} onSubmit={handleAddEvent} />
      )}
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        slotDuration="00:30:00"
        slotLabelInterval={{ hours: 1 }}
        titleFormat={{
          month: "short",
          day: "numeric",
        }}
        slotLabelFormat={{
          hour: "numeric",
          hour12: false,
          minute: "2-digit",
        }}
        allDaySlot={false}
        nowIndicator={true}
        events={events}
        headerToolbar={{
          left: "title prev today next",
          center: "",
          right: "",
        }}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default Calender;
