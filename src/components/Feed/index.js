import React, { Component } from 'react';
// import moment from 'moment';
// import { object } from 'prop-types';
import { v4 } from 'uuid'
import Button from 'material-ui/Button';
// import Styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions 
import { getPosts, handleScroll } from '../../actions/Actions'
import postActions from '../../actions/posts'
// components
import Post from '../Post';
import { InfiniteScroll } from '../../helpers/infiniteScroll'
import { Scroll } from '../../helpers/scroll';
//Selectors
import { selectPosts } from '../../selectors/posts';

 class Feed extends Component {
    constructor () {
        super();
        this.getPosts = this.getPosts.bind(this);
        this.getPostsClick = this.getPostsClick.bind(this);
        this.getPrevPost = this.getPrevPost.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    };


    state = {
        url: "https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d",
    
    };


    componentDidMount() {
        this.props.action.fetchPosts();
    }
    

    handleScroll() {
        // let scrollIndex = Scroll();
        // let { currentPage }  = store.getState().scroll; 

        // if (scrollIndex === -1) {
        //     if (currentPage === 1) {
        //         currentPage = 1;
        //     } else {
        //         currentPage = currentPage - 1;
        //     }
        //     store.dispatch(handleScroll(currentPage));

        // } else  if (scrollIndex === 1) {
        //     currentPage = currentPage + 1;
        //     store.dispatch(handleScroll(currentPage));

        // } else {
        //     return null;
        // }
    }


    getPosts(currentPage) {

        // const { step } = this.state;
        // let postList = [];
        // const { docs } = store.getState().posts;
        // let { page, lateItemIndex, startItemIndex } =  InfiniteScroll(step, currentPage);
        // for (let i = startItemIndex; i < lateItemIndex; i++) {
        //     postList.push(docs[i]);
        // }

        // const objectKeys = Object.keys(postList[1]);
   
        
    }


    getPostsClick() {
        // let currentPage = this.state.currentPage + 1;

        // const { step } = this.state;
        // let postList = [];
        // const {docs} = store.getState().posts;
        // let { page, lateItemIndex, startItemIndex } =  InfiniteScroll(step, currentPage);
        // for (let i = startItemIndex; i < lateItemIndex; i++) {
        //     postList.push(docs[i]);
        // }
        // const objectKeys = store.getState().getPosts.objectKeys;
  
        
  
    }
            
    getPrevPost() {
    
    }



    render () {
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
    console.log('feed state', selectPosts(state), state);
    return {
        posts: selectPosts(state),
    }
};

const mapDispatchToProps = (dispatch) =>({
    action: bindActionCreators({ ...postActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



