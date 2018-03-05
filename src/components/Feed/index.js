import React, { Component } from 'react';
// import moment from 'moment';
// import { object } from 'prop-types';
import { v4 } from 'uuid'
import Button from 'material-ui/Button';
// import Styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions 
import postActions from '../../actions/posts'
// components
import Post from '../Post';
//Selectors
import { InfiniteScroll } from '../../helpers/infiniteScroll'
import { Scroll } from '../../helpers/scroll';

 class Feed extends Component {
    constructor () {
        super();

    }

    state = {
        step: 1,
    }

    componentDidMount() {
        this.props.action.fetchPosts();
    }
    




    render () {
        console.log('feed Props:', this.props);
        return (
            <div >
                <Button raised color="primary" onClick={ this.getPrevPost }>Get Previous Posts</Button>
                     <ul>
                         <li>test</li>
                    </ul>
                <Button raised color="primary" onClick={ this.getPostsClick }>Get Next Posts</Button>
             
            </div>  
            )

    }

}

const mapStateToProps = (state) => {
    console.log('feed state', state);
    return {
        posts: state.posts,
    }
};

const mapDispatchToProps = (dispatch) =>({
    action: bindActionCreators({ ...postActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



