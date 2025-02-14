import BottomNav from "../components/NavBar";
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  org: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  return [
    { id: 1, title: "Meeting with Team", date: "2025-02-20", time: "10:00 AM", org: "SFU" },
    { id: 2, title: "Project Deadline", date: "2025-02-25", time: "12:00 PM", org: "CMPT 300" },
    { id: 3, title: "Hackathon Event", date: "2025-03-01", time: "09:00 AM", org: "SFSS" },
    { id: 4, title: "Study", date: "2025-03-01", time: "09:00 AM", org: "Yourself" },
  ];
};

const Dashboard = async () => {
  const events = await fetchEvents();

  return (
        <main className="p-6 pb-16 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
          <div className="grid grid-cols-1 gap-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
                <h2 className=" text-gray-600 text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-600">
                  <strong>Organization:</strong> {event.org}
                </p>
              </div>
            ))}
          </div>
          <BottomNav />
        </main>
      );
    };

export default Dashboard;