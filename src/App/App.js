import React, { Component } from 'react';
import './App.scss';
import { StudentList } from '../components/StudentList';
import { StudentGroup } from '../components/StudentGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentList />
        <StudentGroup />
      </div>
    );
  }
}

export default App;
