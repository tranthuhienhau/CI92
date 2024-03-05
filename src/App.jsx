import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState({
    all: [],
    active: [],
    completed: []
  });
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputText,
        isCompleted: false
      };
      setTasks(prevState => ({
        ...prevState,
        [activeTab]: [...prevState[activeTab], newTask]
      }));
      setInputText('');
    }
  };

  const handleDeleteTask = (tabName, taskId) => {
    const updatedTasks = tasks[tabName].filter(task => task.id !== taskId);
    setTasks({
      ...tasks,
      [tabName]: updatedTasks
    });
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks[activeTab].map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks({
      ...tasks,
      [activeTab]: updatedTasks
    });
  };

  const handleDeleteAllTasks = (tabName) => {
    setTasks({
      ...tasks,
      [tabName]: []
    });
  };

  return (
    <div className="tabs">
      <h1>#Todo</h1>
      <div className="tab-link-container">
        <button
          className={activeTab === 'all' ? 'tab-link active' : 'tab-link'}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={activeTab === 'active' ? 'tab-link active' : 'tab-link'}
          onClick={() => handleTabClick('active')}
        >
          Active
        </button>
        <button
          className={activeTab === 'completed' ? 'tab-link active' : 'tab-link'}
          onClick={() => handleTabClick('completed')}
        >
          Completed
        </button>
      </div>
      <div className="underline"></div>
      <div className="input">
        <input
          type="text"
          placeholder="Search Detail"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add</button>
        <div className="underline-input"></div>
      </div>
      {/* Hiển thị danh sách task của tab được chọn */}
      <ul>
        {tasks[activeTab].map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span className={task.isCompleted ? 'completed' : ''}>{task.text}</span>
            <FaTrash className="delete-icon" onClick={() => handleDeleteTask(activeTab, task.id)} />
          </li>
        ))}
      </ul>
      {/* Nút "Delete All" và icon xóa cạnh mỗi task */}
      <button onClick={() => handleDeleteAllTasks(activeTab) } className='btn_delete'>Delete All</button>
    </div>
  );
}

export default App;
