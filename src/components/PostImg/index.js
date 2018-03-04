import React, {Component} from 'react';
import { v4 } from 'uuid';
import Styles from './styles';

export default class PostImg extends Component {
    constructor() {
        super();
    }
    render() {
        const {url, width, height, subtitle } = this.props;
        const full_url = 'http://www.nytimes.com/' + url;

        return (
            <img className = { Styles.img } key = {  v4() } src = {full_url} alt = {subtitle} width = {width} height = { height }/>
        )
    }
}