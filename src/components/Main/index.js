import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';
import FeedContainer from '../Feed';
import SinglePost from '../SinglePost';

const Main = () => {
    return (
    
        <main>
            <Switch>
                <Route exact component = { FeedContainer } path = '/'  />
                {/* <Route exact render={(props) => ( <FeedContainer {...props} url = { url } /> )} /> */}
                <Route exact component = { SinglePost } path = '/slider' />
            </Switch>   
        </main>
    )

};

export default Main;
