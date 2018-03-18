//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Instruments
import SetDate from '../SetDate';
import Styles from './styles';
import updatePosts from '../../actions/posts';
import setDate from '../../actions/date';


class Header extends Component {
    constructor() {
        super();
        this.setNewDate = this._setNewDate.bind(this);
    }
    componentDidMount () {
        console.log(this.props);
    }

    _setNewDate = (date) => {
        this.props.action.setDate(date);
        this.props.action.updatePosts(date);
    }; 

    render () {
        return (
            <div className= { Styles.header }>
                <SetDate setNewDate = {this.setNewDate} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        date: state.date
    }
};

const mapDispatchToProps = (dispatch) =>{
    console.log(dispatch);
    return {  
        action: bindActionCreators({ ...updatePosts, ...setDate }, dispatch),
    }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)