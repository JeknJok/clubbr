"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BottomNav from "../components/NavBar";
import EventModal from "../components/EventModal";
import { events, Event } from "../components/Events";
import { addToMyEvents } from "../components/myEvents";

const Dashboard: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [sortType, setSortType] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const maxNewsIndex = 5;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % maxNewsIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleEnroll = (event: Event) => {
    addToMyEvents(event);
    setSelectedEvent(null);
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedEvents = [...events].sort((a, b) => {
    let comparison = 0;
    if (sortType === "date") {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortType === "org") {
      comparison = a.org.localeCompare(b.org);
    } else {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <main className="p-6 pb-16 min-h-screen flex flex-col relative">
      <div className="sticky top-0 bg-gray-800 text-white z-10 flex flex-col md:flex-row h-[300px] md:h-[200px] w-full mb-4 p-4 rounded-md shadow-md relative overflow-hidden">
        <div className="flex-1 flex items-center justify-center border p-4 rounded-md shadow-md relative w-full h-full max-w-4xl mx-auto overflow-hidden cursor-pointer" onClick={() => setSelectedEvent(events[currentNewsIndex-1 % maxNewsIndex])}>
        <Image
            src={`/assets/${events[currentNewsIndex].img}`}
            alt="News Carousel"
            width={800}
            height={400}
            className="rounded-md object-cover w-full h-full"
          />
          
        </div>
        <button onClick={() => setCurrentNewsIndex((prev) => (prev - 1 + maxNewsIndex) % maxNewsIndex)} className="absolute left-4 bottom-8 bg-gray-900 p-2 rounded-full">⬅</button>
        <button onClick={() => setCurrentNewsIndex((prev) => (prev + 1) % maxNewsIndex)} className="absolute right-4 bottom-8 bg-gray-900 p-2 rounded-full">➡</button>
      </div>

      <div className="flex-1 overflow-y-auto border p-4 rounded-md shadow-md bg-gray-900 text-white">
        <h1 className="text-center text-2xl font-bold mb-4">Upcoming Events</h1>
        <div className="mb-4 flex items-center">
          <label className="mr-2">Sort by:</label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border p-2 rounded mr-2 bg-gray-700 text-white"
          >
            <option value="date">Date</option>
            <option value="org">Organization</option>
            <option value="title">Event Name</option>
          </select>
          <button onClick={toggleSortOrder} className="ml-2">
          ↑↓  
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 text-white shadow-md rounded-lg p-4 border border-gray-600 cursor-pointer hover:bg-gray-700 transition"
              onClick={() => setSelectedEvent(event)}
            >
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="mb-1"><strong>Date:</strong> {event.date}</p>
              <p className="mb-1"><strong>Time:</strong> {event.time}</p>
              <p><strong>Organization:</strong> {event.org}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onEnroll={handleEnroll} />
        </div>
      )}

      <BottomNav />
    </main>
  );
};

export default Dashboard;
