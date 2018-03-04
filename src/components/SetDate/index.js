import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';


   
let selectYear = '', selectMonth = '';

export default class SetDate extends Component {
    constructor () {
        super();
        this.setMonth = this.setMonth.bind(this);
        this.setYear = this.setYear.bind(this);
        this.setDate = this.setDate.bind(this);
        
    }

    setMonth (event) {
        event.preventDefault();
        const month = event.target.value;
    }   
    
    setYear (event) {
        event.preventDefault();
        const year = event.target.value;
        
    }


    setDate() {
        const month = selectMonth.value;
        const year = selectYear.value;
    }

    render () {
        return (
            <div>
                <select ref= {node => selectYear = node} onChange={this.setYear} onClick = {this.setDate} >
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                </select>
                <select ref= {node => selectMonth = node} onChange={this.setMonth} onClick = {this.setDate} >
                    <option value="1">Январь</option>
                    <option value="2">Февраль</option>
                    <option value="3">Март</option>
                    <option value="4">Апрель</option>
                    <option value="5">Май</option>
                    <option value="6">Июнь</option>
                    <option value="7">Июль</option>
                    <option value="8">Август</option>
                    <option value="9">Сентябрь</option>
                    <option value="10">Октябрь</option>
                    <option value="11">Ноябрь</option>
                    <option value="12">Декабрь</option>
                </select>
            </div>
          
        );
    }
}

