import React from 'react';
import Moment from 'react-moment';

const Event = ({ event }) => {
  const date_format = "D MMM YYYY HH:mm";
  return(
    <li>
      <div className="date">
        <span className="day"><Moment format="D">{event.start_date}</Moment></span>
        <span className="month"><Moment format="MMM">{event.start_date}</Moment></span>
      </div>
      <div className="info" style={{ backgroundImage: `url(${event.image.retina_thumbnail.url})`}}>
        <h2 className="title">{event.name}</h2>
        <p className="desc">{event.description}</p>
        <ul>
          <li><span className="fa fa-globe"></span>&ensp;{event.place}</li>
          <li>
            <span className="fa fa-calendar"></span>&ensp;
            <Moment format={date_format}>{event.start_date}</Moment> - <Moment format={date_format}>{event.end_date}</Moment>
          </li>
        </ul>
      </div>
      <iframe className="video" src={event.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </li>
  );
}

export default Event;
