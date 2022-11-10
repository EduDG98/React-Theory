import { useContext } from 'react'
import { LoginForm } from './LoginForm';
import { Profile } from './Profile';
import { AuthContext } from '../context/authContext';


export const Main = ({ children }) => {
    const authContext = useContext(AuthContext)

    return (
        <div className="App">
            {(authContext.state.isSigned == true) ? (
                <Profile />
            ) : (
                <LoginForm />
            )}
        </div>
    )
}
