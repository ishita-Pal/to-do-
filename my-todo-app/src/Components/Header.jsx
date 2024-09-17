import React from 'react'
import TaskForm from './TaskForm';
import './main.css';

const Header = ({ addTask }) => {
  return (
    <header>
    <div className="name">
      Your Name: <input type="text" id="name" placeholder="Name here" />
    </div>
    <h1 className="heading">Task List</h1>
    <TaskForm addTask={addTask}/>
  </header>
  );
};

export default Header;
