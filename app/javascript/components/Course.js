import React, { useEffect, useState } from 'react';
import Truncate from 'react-truncate';
import NavBar from './NavBar';

const Course = ({course}) => {
  return(
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img-top card-img" src={course.image.retina_thumbnail.url} alt={course.name} />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <div className="card-text">
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {course.description}
            </Truncate>
          </div>
          <div className="row card-button">
            <div className="col">
              <a href="#" className="btn btn-primary">Enroll now - {course.price}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
