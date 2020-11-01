import React, { Component } from 'react';
import './App.scss';
import { StudentList } from '../components/StudentList';
import { StudentGroup } from '../components/StudentGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentGroup />
        <StudentList />
      </div>
    );
  }
}

export default App;
