// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// let { url } = hea
// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';


  export default class App extends Component {
    constructor (props) {
        console.log('App props', props);
        super(props);
    }

    state = {
        url: "https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d"
    }

    componentDidMount() {
        
    }


    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header  />
                    <Main  />
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

// function mapStateToProps (state) {
//     console.log('App State', state);
//     return state;
//   }

// export default connect(mapStateToProps)(App)