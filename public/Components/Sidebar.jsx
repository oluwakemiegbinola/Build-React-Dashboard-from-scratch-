import React from 'react';
import { 
  BiHome, 
  BiBookAlt, 
  BiMessage, 
  BiSolidReport, 
  BiStats, 
  BiTask, 
  BiAlarm,
  BiAbacus,
  BiAlarmSnooze

} from 'react-icons/bi';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="menu">
      {/* Logo Section */}
      <div className="logo">
        <BiBookAlt className='logo-icons'/>
        <h2>chemo Analyst</h2>
      </div>

      {/* Menu List */}
      <div className="menu--list">
        <a href="#" className="item">
          <BiHome className='icons' />
          Dashboard
        </a>
        <a href="#" className="item">
          <BiMessage className='icons'/>
          Messages
        </a>
        <a href="#" className="item">
          <BiSolidReport className='icons' />
          Reports
        </a>
        <a href="#" className="item">
          <BiStats  className='icons'/>
          Stats
        </a>
        <a href="#" className="item">
          <BiAlarmSnooze  className='icons'/>
          Snooze
        </a>
        <a href="#" className="item">
          <BiAbacus  className='icons'/>
          Abacus
        </a>
        <a href="#" className="item">
          <BiTask className='icons'/>
          Tasks
        </a>
        <a href="#" className="item">
          <BiAlarm className='icons'/>
          Alerts
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
