import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Event from './Event';

const Profile = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await fetch(`/api/v1/events`);
    const data = await response.json();
    const events = await data.data;
    setEvents(events);
  }

  return(
    <div className="container border border-white h-100">
      <NavBar/>
      <div className="card-header bg-dark text-center">
        <h4>Michael Henao</h4>
      </div>
      <div>
        <div className="card-header bg-dark text-center">
          <h4>Events</h4>
        </div>
        <div className="col-12">
          <ul className="event-list">
            {events.map(event => (
              <Event event={event} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
