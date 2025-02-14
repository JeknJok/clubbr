export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    org: string;
  }
  
  export let myEvents: Event[] = []; // Empty initially
  
  export const addToMyEvents = (event: Event) => {
    if (!myEvents.some((e) => e.id === event.id)) {
      myEvents = [...myEvents, event];
    }
  };
  
  export const getMyEvents = () => myEvents; // Function to retrieve enrolled events
