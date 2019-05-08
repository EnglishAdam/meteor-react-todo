import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Component
import Task from './Task.js';

// Data
import { Tasks } from '../api/tasks.js';
 
// App component - represents the whole app
// export default class App extends Component {
  // getTasks() {
    //   return [
      //     { _id: 1, text: 'This is task 1' },
      //     { _id: 2, text: 'This is task 2' },
      //     { _id: 3, text: 'This is task 3' },
      //   ];
      // }
      
      // renderTasks() {
        //   return this.getTasks().map((task) => (
          //     <Task key={task._id} task={task} />
          //   ));
          // }

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// Track changes and add them to App props
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App); // <-- Have wrapped App, now fetches the Tasks, do so rerenders when tasks change