import React, { useContext, useState } from 'react';
import './App.css';
import CardTask from './components/CardTask';
import { ToDoContext } from './context';

export default function App() {
  const { list, setList } = useContext(ToDoContext);
  
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
          { list.length ? (
            <button
              onClick={ () => setList([]) }
              type="button"
            >
              Clear List
            </button>
          ) : null }
        </form>
        <section>
          {
            list ? (
              <ul className="list">
                {list.map((task, index) => (
                  <CardTask
                    currList={list}
                    changeList={setList}
                    key={task}
                    task={task}
                    index={index}
                    last={list.length - 1}
                  />
                ))}
              </ul>
            )
            : null
          }
        </section>
      </main>
      <footer><p>2021 | Desenvolvido por André Menezes</p></footer>
    </>
  );
};
