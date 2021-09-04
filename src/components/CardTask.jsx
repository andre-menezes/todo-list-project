import React, { useContext } from 'react';
import { ToDoContext } from '../context';
import arrowDown from '../images/arrow-down.png';
import arrowUp from '../images/arrow-up.png';
import edit from '../images/pencil.png';
import remove from '../images/trash.png';

export default function CardTask(props) {
  const { task, index, last } = props;
  const { list, setList } = useContext(ToDoContext);
  
  const changePosition = (arr, from, to) => {
    const getElement = arr.splice(to, 1, arr[from]);
    arr[from] = getElement;
    return setList(arr.flat());
  }

  return (
    <button
      type="button"
      className='tasks'
    >
      <span>{`${index + 1}. ${task}`}</span>
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
        {
          index < last ? (
            <button
              className="action-button"
              onClick={ () => changePosition(list, index, index + 1) }
            >
              <img src={ arrowDown } alt="arrow-down" />
            </button>
          ) : null
        }
        {
          index > 0 ? (
          <button
            className="action-button"
            onClick={ () => changePosition(list, index, index - 1) }
          >
            <img src={ arrowUp } alt="arrow-up" />
          </button>
          ) : null
        }
      </div>
    </button>
  );
};
