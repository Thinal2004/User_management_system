import {useNavigate} from 'react-router-dom'
import './App.css'
import UserForm from './UserForm'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <section id="center">
        <h1>Welcome to User Management System</h1>
        <button className="btn" onClick={() => navigate('/users')}>
          Users
        </button>
      </section>
    </>
  )
}

export default App
