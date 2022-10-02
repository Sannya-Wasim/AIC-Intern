import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { events } from "./EventsPage";
import { Link } from "react-router-dom";
import EventForm from "./EventForm";
import "./EventsPage.css";

const EventPage = () => {
  const { id } = useParams();
  const event = events[id];
  return (
    <div>
      <Banner title={event.title} />
      <div className="card-container">
        <div className="card-image">
          <img src={event.img} alt="" />
        </div>
        <div className="card-text">
          <h1>{event.title}</h1>
          <p>{event.summary}</p>
        </div>
      </div>
      <div className="eventForm">
        <EventForm name={event.id} />
        <button>
          <Link to="/events">back to events</Link>
        </button>
      </div>
    </div>
  );
};

export default EventPage;
