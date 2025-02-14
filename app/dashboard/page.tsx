
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  return [
    { id: 1, title: "Meeting with Team", date: "2025-02-20", time: "10:00 AM" },
    { id: 2, title: "Project Deadline", date: "2025-02-25", time: "12:00 PM" },
    { id: 3, title: "Hackathon Event", date: "2025-03-01", time: "09:00 AM" },
  ];
};

const Dashboard = async () => {
  const events = await fetchEvents();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="border-b">
                <td className="px-4 py-2 border">{event.title}</td>
                <td className="px-4 py-2 border">{event.date}</td>
                <td className="px-4 py-2 border">{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;