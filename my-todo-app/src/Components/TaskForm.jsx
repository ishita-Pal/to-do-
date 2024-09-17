import React, {useState} from 'react';
import './main.css';
import './rating.css';
import './clock.css';


const TaskForm = ({addTask}) => {


  const [task, setTask] = useState('');
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRating === null) {
      alert('Please select a rating before adding the task.');
      return;
    }
    addTask({ task, rating: selectedRating });
    setTask('');
    setSelectedRating(null);
  };


  return (
    <form id="form" onSubmit={handleSubmit}>
      <input 
      type="text" 
      id="inputt" 
      placeholder="What do you have planned?"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
      <div className="box">
        <p>Priority of your task</p>
        <div className="rating">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <input 
              type="radio" 
              name="rating" 
              id={`rate${10 - i}`} 
              value={10 - i} 
              checked={selectedRating === 10 - i}
                onChange={(e) => setSelectedRating(parseInt(e.target.value))}
              />
              <label htmlFor={`rate${10 - i}`}>{10 - i}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="hh">
        <div className="box44">
          {/* <select>
            <option>Select your category</option>
            <option>BUSINESS</option>
            <option>PERSONAL</option>
            <option>OTHERS</option>
          </select> */}
          <div className="submittt">
            <input type="submit" id="submitt" value="ADD TASK" style={{ marginTop: '1px' }} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
