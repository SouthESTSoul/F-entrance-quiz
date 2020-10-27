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
      <div>
        <h1>学员列表</h1>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="add-student">+添加学员</button>
      </div>
    );
  }
}
