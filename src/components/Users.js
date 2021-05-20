import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';

export class Users extends Component {
  render() {
    const { users, loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      // console.log('NOT LOAODING');
      return (
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
    }
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
