import React, { Component } from 'react';
import { apiGetStudents } from '../api/student';
import { StudentItem } from './StudentItem';

export class StudentList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
  };

  componentDidMount() {
    apiGetStudents().then(this.setStudents).catch(console.error);
  }

  setStudents = (students) => {
    this.setState({ students });
  };

  render() {
    const { students } = this.state;
    return (
      <div className="StudentItem">
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </div>
    );
  }
}
