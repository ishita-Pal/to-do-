import React, {useState} from 'react';
import Header from "./Components/Header"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"
import Clock from './Components/Clock';


const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };


  return (
    <div className="top">
      <Header addTask={addTask}/>
      <main>
        <div id="contenttt" className="content-container">
          <div className="box1">
            <TaskList tasks={tasks} setTasks={setTasks}/>
          </div>
        </div>
      </main>
      <div className="cc">
        <Clock />
      </div>
    </div>
  );
};

export default App;
