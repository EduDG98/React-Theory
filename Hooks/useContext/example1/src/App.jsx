import { useState } from 'react'
import { LoginForm } from './components/LoginForm';
import { AuthContext, AuthContextProvider } from './context/authContext';

function App() {
  const [user, setUser] = useState({ name: '' });
  const [isSigned, setIsSigned] = useState(false)

  const adminUser = {
    username: 'admin',
    password: 'admin'
  }

  //function to login
  const login = (details) => {
    console.log(details)
    if (details.name == adminUser.username && details.password == adminUser.password) {
      console.log('Logged in');
      setIsSigned(true)
      setUser({ name: details.name })
    } else {
      console.log('Details not match')
    }
  }

  //function to logout
  const logout = () => {
    console.log('Logout')
    setIsSigned(false)
  }

  return (
    <AuthContextProvider>
      <div className="App">
        {(isSigned == true) ? (
          <div>
            <h2>Welcome, {user.name}</h2>
            <button onClick={logout}>Logut</button>
          </div>) : (
          <LoginForm login={login} />
        )}
      </div>
    </AuthContextProvider>
  );
}

export default App;
