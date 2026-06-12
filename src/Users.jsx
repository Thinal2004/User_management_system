import React from 'react'
import UserForm from './UserForm'
import UserTable from './assets/Components/UserTable'


const users = [
  { id: 1, 
    name: 'John Doe' },

  { id: 2, 
    name: 'Jane Smith' }
];

function Users() {
  return (
    <div>
      <UserForm />
      <UserTable users={users} />
    </div>
  )
}

export default Users