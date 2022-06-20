import React from 'react';
import Button from '../Button/index';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">
            Adicione um novo topico de estudo
          </label>
          <input type="text" id="task" name="task" placeholder="o que você quer estudar?" required />
        </div>
        <div>
          <label htmlFor="time">
            Tempo
          </label>
          <input type="time" step="1" id="time" name="time" min="00:00:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
