"use client"
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import BottomNav from "../components/NavBar";
import { getMyEvents, Event } from "../components/myEvents"; // Import enrolled events


const CalendarPage: React.FC = () => {
  const [enrolledEvents, setEnrolledEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEnrolledEvents(getMyEvents()); // Load enrolled events on mount
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setFilteredEvents(enrolledEvents.filter(event => event.date === formattedDate));
  };

  return (
    <main className="p-6 pb-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Event Calendar</h1>
      <div className="flex flex-col items-center">
        {/* Calendar */}
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date }) => {
            const formattedDate = date.toISOString().split("T")[0]; // Converts to "YYYY-MM-DD"
            return enrolledEvents.some(event => event.date === formattedDate) ? "highlight-event" : null;
          }}
        />

        {/* Selected Date Events */}
        {selectedDate && (
          <div className="mt-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Events on {selectedDate.toDateString()}</h2>
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-300 mt-2">
                  <h3 className="text-lg font-semibold text-gray-600">{event.title}</h3>
                  <p className="text-gray-600">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="text-gray-600">
                    <strong>Organization:</strong> {event.org}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No events on this day.</p>
            )}
          </div>
        )}
      </div>
      <BottomNav />
    </main>
  );
};

export default CalendarPage;
