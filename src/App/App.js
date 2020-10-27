import React, { Component } from 'react';
import './App.scss';
import { StudentList } from '../components/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentList />
      </div>
    );
  }
}

export default App;
