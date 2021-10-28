import React from 'react';
import Todo from '../src/components/Todo.js';
import TodoForm from '../src/components/TodoForm.js'




const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        < Todo data={data} />
        < TodoForm />
      </div>
    );
  }
}

export default App;
