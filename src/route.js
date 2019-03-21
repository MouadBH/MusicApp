import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Album from './components/album/album';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/album/:id" exact component={Album} />
        </Switch>
    );
}

export default Routes;