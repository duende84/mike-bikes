import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Course from './Course';

const Academy = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await fetch(`/api/v1/courses`);
    const data = await response.json();
    const courses = await data.data;
    setCourses(courses);
  }

  return(
    <div className="container border border-white h-100">
      <NavBar/>
      <div className="col">
        <div className="row">
          {courses.map(course => (
            <Course course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academy;
