import React, { Component } from 'react';
import axios from 'axios';

export class StudentGroup extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.getAllGtoups();
  }

  getAllGtoups = () => {
    axios.get('http://localhost:8080/student/groups').then((res) => {
      this.setState({
        groups: res.data,
      });
    });
  };

  render() {
    return (
      <div className="main">
        <div className="top">
          <h1>分组列表</h1>
          <button type="button" className="group-button">
            分组学员
          </button>
        </div>
        {this.state.groups.length > 0 && this.state.groups[0].students.length > 0 ? (
          <div className="groups">
            {this.state.groups.map((group, index) => (
              <div className="group" key={index}>
                <div className="group-name">{`${group.groupName}`}</div>
                <div className="group-list">
                  {
                    // eslint-disable-next-line no-shadow
                    group.students.map((student, index) => (
                      <div className="item" key={index}>{`${student.id}.${student.name}`}</div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
