import React, {Component} from 'react'
import { object, string } from 'prop-types';
import { v4 } from 'uuid';

export default class PostKey extends Component {
    constructor() {
        super();

    }
    render() {
        const {item } = this.props;
        return (
            <p key={ v4() }>
                {item}
            </p>
        )
    }
}