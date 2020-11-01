import React, { Component } from 'react';
import { apiGetStudents, apiAddStudent } from '../api/student';
import { StudentItem } from './StudentItem';
import { StudentModel } from '../models';

export class StudentList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
    isOpenAddBlock: 'true',
    name: '',
  };

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.getAllStudents();
  }

  getAllStudents = () => {
    apiGetStudents().then(this.setStudents).catch(console.error);
  };

  setStudents = (students) => {
    this.setState({ students });
  };

  changeIsOpenAddBlockStatus = () => {
    this.setState({ isOpenAddBlock: false });
  };

  changeText = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  enterAddStudent = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        isOpenAddBlock: true,
      });
      const student = new StudentModel('', this.state.name);
      apiAddStudent(student).then(() => this.getAllStudents());
      this.setState({ name: '' });
    }
  };

  render() {
    const { students } = this.state;
    return (
      <div>
        <h1>学员列表</h1>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
        {this.state.isOpenAddBlock ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <button className="input-item" type="button" onClick={this.changeIsOpenAddBlockStatus}>
            +添加学员
          </button>
        ) : (
          <div className="input-item">
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeText}
              onKeyUp={this.enterAddStudent}
            />
          </div>
        )}
      </div>
    );
  }
}
