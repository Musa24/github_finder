import React, { Component } from 'react';

class Alert extends Component {
  render() {
    const { alert } = this.props;
    return (
      alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle"></i>
          {alert.msg}
        </div>
      )
    );
  }
}

export default Alert;
