"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BottomNav from "./components/NavBar";
import EventModal from "./components/EventModal";
import { events, Event } from "./components/Events";
import { addToMyEvents } from "./components/myEvents";


export default function Home() {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const maxNewsIndex = 5;
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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

  return (
    <main className="p-6 flex flex-col items-center text-center min-h-screen pb-16">
    
    <h1 className="text-3xl font-bold mb-6">Scheduler</h1>
    <p className="text-lg mb-4">Manage your events and profile with ease.</p>
    <div className="sticky top-0 bg-gray-800 text-white z-10 flex flex-col md:flex-row h-[800px] md:h-[800px] w-full mb-4 p-4 rounded-md shadow-md relative overflow-hidden">
            <div className="flex-1 flex items-center justify-center border p-4 rounded-md shadow-md relative w-full h-full max-w-4xl mx-auto overflow-hidden" onClick={() => setSelectedEvent(events[currentNewsIndex])}>
              <Image 
                src={`/assets/p${currentNewsIndex}.png`}
                alt="News Carousel"
                width={600}
                height={300}
                className="rounded-md object-cover w-full h-full"
              />
              
            </div>
            <button onClick={() => setCurrentNewsIndex((prev) => (prev - 1 + maxNewsIndex) % maxNewsIndex)} className="absolute left-4 bottom-8 bg-gray-900 p-2 rounded-full">⬅</button>
            <button onClick={() => setCurrentNewsIndex((prev) => (prev + 1) % maxNewsIndex)} className="absolute right-4 bottom-8 bg-gray-900 p-2 rounded-full">➡</button>
          </div>

          {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onEnroll={handleEnroll} />
        </div>
      )}

          <BottomNav />
  </main>
  );
}
