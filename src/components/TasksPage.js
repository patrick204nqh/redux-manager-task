import React, { useState } from 'react';

const TasksPage = () => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const formToggler = () => {
    showCardForm(!cardForm);
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
          <form>
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
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TasksPage;
