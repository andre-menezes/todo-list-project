import React, { useContext } from 'react';
import { ToDoContext } from '../context';
import edit from '../images/pencil.png';
import remove from '../images/trash.png';

export default function CardTask(props) {
  const { task } = props;
  const { list, setList } = useContext(ToDoContext);


  return (
    <div
      className='tasks'
    >
      <span>{task}</span>
      <div className="actions">
        <button
          className="action-button remove"
          onClick = { () => setList(list.filter((item) => item !== task)) }
        >
          <img src={ remove } alt="remove" />
        </button>
        <button className="action-button edit">
          <img src={ edit } alt="edit" />
        </button>
      </div>
    </div>
  );
};
