import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setList([...list, task]);
    setTask('');
    document.getElementById('input-task').focus();
  }

  return (
    <>
      <header><h1>To Do List!</h1></header>
      <main>
        <form>
          <label htmlFor="task">
            Task:
            <input
              id="input-task"
              onChange={({ target }) => setTask(target.value)}
              type="text"
              value={ task }
            />
          </label>
          <button
            onClick={ addTask }
            type="button"
          >
            Add
          </button>
        </form>
        <section>
          {
            list ? (
              <ol>
                {list.map((task) => <li>{ task }</li>)}
              </ol>
            )
            : null
          }
        </section>
      </main>
      <footer><p>2021 | Desenvolvido por André Menezes</p></footer>
    </>
  );
};
