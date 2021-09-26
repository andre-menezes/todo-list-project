import React, { useContext, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setList(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <main className="container">
        <div>
          <header><h1>To Do List!</h1></header>
          <form className="input-area">
            <label htmlFor="task">
              Task:
              <input
                className='input-text'
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
        </div>
        <section  className="output-area">
          {
            list ? (
                <Droppable droppableId="tasks">
                  {(provided) => (
                    <ol
                      className="list"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {list.map((task, index) => (
                        <Draggable key={task} index={index} draggableId={task}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <CardTask
                                currList={list}
                                changeList={setList}
                                task={task}
                              />
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ol>
                  )}
              </Droppable>
            ) : null
          }
        </section>
      </main>
      <footer><p>2021 | Desenvolvido por André Menezes</p></footer>
    </DragDropContext>
  );
};
