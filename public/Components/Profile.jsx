import React from 'react';
import ProfileHeader from './ProfileHeader';
import '../styles/profile.css';
import userImage from '../assets/image.png';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    title: 'Html/CSS',
    duration: '2 Hours',
    icon: <BiBook />,
  },
  {
    title: 'Django',
    duration: '2 Hours',
    icon: <BiBook />,
  },
  {
    title: 'Java',
    duration: '3 Hours',
    icon: <BiBook />,
  },
  {
    title: 'React',
    duration: '2.5 Hours',
    icon: <BiBook />,
  },
  {
    title: 'PHP/SQL',
    duration: '1.5 Hours',
    icon: <BiBook />,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="User profile picture" />
          <h3 className="username">Jhone Doe</h3>
          <span className="profession">Teacher</span>
        </div>
        <div className="user-courses">
          {courses.map((course, index) => (
            <div className="course" key={index}>
              <div className="course-detail">
                <div className="course-cover">{course.icon}</div>
                <div className="course-name">
                  <div className="title">{course.title}</div> {/* Changed h5 to div */}
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="action">:</div> {/* Corrected the closing div */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
