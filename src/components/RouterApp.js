import React, {useContext} from 'react';
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import {publicRoutes, privateRoutes} from "../navigationPage/router/Route";
import { AuthContext } from './context';

function RouterApp(props) {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        isAuth
        ? <Switch>
             {privateRoutes.map(route => (
                <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.path}
                />
            ))}
            <Redirect to='/posts' />

        </Switch>
        :
        <Switch>
           
            {publicRoutes.map(route => (
                <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.path}
                />
            ))}
         <Redirect to='/login' />
      </Switch>
    );
}

export default RouterApp;