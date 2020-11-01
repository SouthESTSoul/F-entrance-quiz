import React, { Component } from 'react';
import './Student.scss';

export class StudentItem extends Component {
  render() {
    const { id, name } = this.props.student;
    return (
      <div className="StudentItem">
        <p>
          {id}. {name}
        </p>
      </div>
    );
  }
}
