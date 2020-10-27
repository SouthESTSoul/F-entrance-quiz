import React, { Component } from 'react';
import { apiGetStudents } from '../api/student';
import { StudentItem } from './StudentItem';

export class StudentList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
    openAddBlock: 'none',
  };

  componentDidMount() {
    apiGetStudents().then(this.setStudents).catch(console.error);
  }

  setStudents = (students) => {
    this.setState({ students });
  };

  changeOpenAddBlockStatus = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const status = this.state.openAddBlock === 'none' ? 'block' : 'none';
    this.setState({ openAddBlock: status });
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
        <button className="add-student" onClick={this.changeOpenAddBlockStatus}>
          +添加学员
        </button>
        <div style={{ display: this.state.openAddBlock }} className="student-form">
          <form>
            <input type="text" placeholder="姓名" />
          </form>
        </div>
      </div>
    );
  }
}
