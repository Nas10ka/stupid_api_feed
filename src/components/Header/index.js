import React, { Component } from 'react';
import Styles from './styles';
// import SetDate from '../SetDate';
import SetDateContainer from '../SetDate'


export default class Header extends Component {

    render () {
    
        return (
            <div className= { Styles.header }>
                <SetDateContainer />
            </div>
        )
    }
}
