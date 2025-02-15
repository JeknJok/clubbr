"use client"
import React, { useState } from "react";
import BottomNav from "../components/NavBar";
import EventModal from "../components/EventModal";
import { events, Event } from "../components/Events";
import { addToMyEvents } from "../components/myEvents";

const Dashboard: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [sortType, setSortType] = useState("date");

  const handleEnroll = (event: Event) => {
    addToMyEvents(event);
    setSelectedEvent(null);
  };

  const sortedEvents = [...events].sort((a, b) => {
    if (sortType === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.org.localeCompare(b.org);
    }
  });

  return (
    <main className="p-6 pb-16 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-4">Upcoming Events</h1>

      <div className="mb-4">
        <label className="mr-2">↑↓</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="date">Date</option>
          <option value="org">Organization</option>
          <option value="title">Event Name</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-300 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => setSelectedEvent(event)}
          >
            <h2 className="text-gray-600 text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-600 mb-1"><strong>Time:</strong> {event.time}</p>
            <p className="text-gray-600"><strong>Organization:</strong> {event.org}</p>
            
          </div>
        ))}
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onEnroll={handleEnroll} />

      <BottomNav />
    </main>
  );
};

export default Dashboard;
