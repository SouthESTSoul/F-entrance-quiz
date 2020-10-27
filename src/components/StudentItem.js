import React, { Component } from 'react';

export class StudentItem extends Component {
  // constructor(id, name) {
  //   super();
  // this.id = id;
  // this.name = name;
  // };

  render() {
    const { id, name } = this.props.student;
    return (
      <div className="StudentItem">
        <p>{id}</p>
        <p>{name}</p>
      </div>
    );
  }
}
