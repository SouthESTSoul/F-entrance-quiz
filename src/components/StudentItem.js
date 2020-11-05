import React, { Component } from 'react';
import './Student.scss';

export class StudentItem extends Component {
  render() {
    const { id, name } = this.props.student;
    return (
        // TODO GTB-工程实践: - css class的命名不规范，应该是student-item这种格式
      <div className="StudentItem">
        <p>
          {id}. {name}
        </p>
      </div>
    );
  }
}
