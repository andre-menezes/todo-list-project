import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const context = { list, setList };
  
  return (
    <ToDoContext.Provider value={ context }>
      {children}
    </ToDoContext.Provider>
  );
};

ToDoProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export { ToDoContext, ToDoProvider as Provider };
