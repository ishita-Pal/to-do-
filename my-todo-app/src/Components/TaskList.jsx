import React, { useState } from 'react';
import './main.css';
import './rating.css';
import './clock.css';
import RangeSlider from './RangeSlider';
import { filterTasks, sortTasksByPriority } from '../utils/taskUtils';

const TaskList = ({ tasks, setTasks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // State to manage the index of the task being edited
  const [editValue, setEditValue] = useState('');

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].task = editValue;
    setTasks(newTasks);
    setEditIndex(-1); // Reset edit state after editing
  };

  const deleteTask = (index) => {
    console.log("Deleting task at index:", index);
    setTasks(tasks.filter((_, i) => i !== index));
    console.log("Tasks after deletion:", tasks);
  };
  

  const sortedTasks = sortTasksByPriority(tasks);
  const filteredTasks = filterTasks(sortedTasks, searchTerm);

  return (
    <section className="list">
      <h2>Tasks</h2>
      <div className="sort">
        <button className="button-1" role="button" onClick={() => setTasks(sortTasksByPriority(tasks))}>SORT</button>
      </div>
      <div className="searchbox">
        <div className="search">
          <div className="icon" onClick={() => document.querySelector('.search').classList.toggle('active')}></div>
          <div className="innput">
            <input
              type="text"
              placeholder="search"
              id="mysearch"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <span className="clear" onClick={() => setSearchTerm('')}></span>
        </div>
      </div>
      <div id="tasks">
        {filteredTasks.map((task, index) => (
          <div key={index} className="task">
            {editIndex === index ? (
              <div className="edit-task">
                <input type="text" value={editValue} onChange={handleEditChange} />
              </div>
            ) : (
              <div className="content">
                <input
                  type="text"
                  className="text"
                  value={`${task.task} (Priority: ${task.rating})`}
                  readOnly
                />
              </div>
            )}
            <div className="actions">
              {editIndex === index ? (
                <button
                  className="edit"
                  onClick={() => handleEditSubmit(index)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => {
                    setEditIndex(index);
                    setEditValue(task.task);
                  }}
                >
                  Edit
                </button>
              )}
              <button className="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
            <RangeSlider />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskList