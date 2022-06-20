import React from 'react';
import './style.scss';

function List() {
  const tasks = [{
    task: 'React',
    time: '02:00:00'
  },
  {
    task: 'Javascript',
    time: '01:30:00'
  }];

  return (
    <aside className="taskList">
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li className="item" key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
