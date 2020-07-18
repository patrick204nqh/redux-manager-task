import React, { useState } from 'react';
import TasksList from './TasksList';

const TASKS_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    showCardForm(false);
  };

  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description,
    });
    resetForm();
  };

  const renderTaskLists = () => {
    const { tasks } = props;
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div className='col-md-3 card m-2 p-0' key={id}>
          <TasksList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
          />
        </div>
      );
    });
  };

  return (
    <div className='container my-5'>
      <div className='jumbotron py-3'>
        <div className='row'>
          <div className='col-md-2'>
            <button className='btn btn-success m-3' onClick={formToggler}>
              +
            </button>
          </div>
          <div className='col-md-10'>
            <h2 className='display-4 text-center text-uppercase'>
              Task Manager
            </h2>
          </div>
        </div>
        {/* Inputs Form */}
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Task Title'
                onChange={onChangeTitle}
              />
            </div>
            <div className='form-group'>
              <textarea
                type='text'
                className='form-control'
                placeholder='Task Description'
                onChange={onDescriptionChange}
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        )}
      </div>
      <div
        className='row d-flex justify-content-center position-relative'
        style={{ background: '#e9ecef' }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

export default TasksPage;
