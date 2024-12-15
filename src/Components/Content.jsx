import React from 'react';
import ContentHeader from './ContentHeader';  // Importing ContentHeader component
import '../styles/content.css';  // Importing styles for the content
import Card from '../components/Card';  // Importing Card component
import TeacherList from '../components/TeacherList'; 
const Content = () => {
  return (
    <div className="content"> 
      <ContentHeader />  {/* Rendering ContentHeader component */}
      <Card />  {/* Rendering Card component */}
      <TeacherList />
    </div>
  );
}; // This closing bracket ends the Content function

export default Content;  // Exporting the Content component for use in other files
