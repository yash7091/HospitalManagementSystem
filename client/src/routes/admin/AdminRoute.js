import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext' 

function AdminRoute({component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser !== null && (currentUser.uid).includes('kpmN5fDhOoTBge39m6FZ7AiHhY33')
                ? <Component {...props}  /> 
                : <Redirect to="/patient" />
            }}
        >

        </Route>
    )
}

export default AdminRoute
