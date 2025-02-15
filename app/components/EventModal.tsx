import React from "react";
import { events, Event } from "../components/Events";
import Image from "next/image";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
  onEnroll: (event: Event) => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose, onEnroll }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-xl">&times;</button>
        <div className="w-full max-h-96 overflow-hidden flex justify-center">
          <Image
                      src={`/assets/${events[event.id+1].img}`}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="rounded-md object-cover w-full h-full"
                    />
        </div>
        <h2 className="text-gray-600 text-xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
        <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
        <p className="text-gray-600"><strong>Organization:</strong> {event.org}</p>
        <h1 className="text-gray-600"><strong>Event Information:</strong><p>{event.info}</p></h1>
        
        <button 
          onClick={() => {
            onEnroll(event);
            onClose();
          }} 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Enroll in Event
        </button>
      </div>
    </div>
  );
};

export default EventModal;
