import React from 'react';
import '../styles/teacherList.css';
import Image1 from '../assets/image.png';  // Correct import for the image

const teachers = [
    {
        image: Image1,
        name: 'Prof. Jone Doe',
        duration: "20 hours lesson",  // Fixed the typo
        cost: '100',
      },
      // Add more teachers as needed
  {
    image: Image1,
    name: 'Prof. Jone Doe',
    duration: "20 hours lesson",  // Fixed the typo
    cost: '100',
  },
  // Add more teachers as needed
  {
    image: Image1,
    name: 'Prof. Jone Doe',
    duration: "20 hours lesson",  // Fixed the typo
    cost: '100',
  },
  // Add more teachers as needed
  {
    image: Image1,
    name: 'Prof. Jone Doe',
    duration: "20 hours lesson",  // Fixed the typo
    cost: '100',
  },
  // Add more teachers as needed
  {
    image: Image1,
    name: 'Prof. Jone Doe',
    duration: "20 hours lesson",  // Fixed the typo
    cost: '100',
  },
  // Add more teachers as needed
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      <div className="list--container">
        {teachers.map((teacher) => (
          <div className="list">
            <div className="teacher--detail">
              <img src={teacher.image} alt=
              {teacher.name} />
              <h3>{teacher.name}</h3>
            </div>
              <span> {teacher.duration} </span>
              <span> $ {teacher.cost}/hr.</span>
              <span
              className="teacher--todo">:</span>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
