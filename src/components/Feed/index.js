import React, { Component } from 'react';
import { v4 } from 'uuid'
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions 
import postActions from '../../actions/posts'
// components
import Post from '../Post';
//Helpers
// import { InfiniteScroll } from '../../helpers/infiniteScroll'
// import { Scroll } from '../../helpers/scroll';

 class Feed extends Component {
    constructor (props) {
        super();
        console.log(props);

    }

    state = {
        step: 1,
    }

    componentWillMount() {
        this.props.action.fetchPosts();
    }
    

    render () {
        const { posts, keys } = this.props;
        let tenPosts = [];
        if (Boolean(posts)) {
            for (let i=0; i<10; i++) {
                tenPosts.push(posts[i]);
            }
            console.log('keys', keys);
        }
        
        let post;
        if (tenPosts) {
            post = tenPosts.map((props) => {
                console.log(props, keys);
                return ( 
                    <Post  objKeys = { keys }  key = { v4() } { ...props }/>
                )
            });

            console.log('tenPosts', posts[1]);
            console.log('Boolean(posts)',posts.length);
        }
        return (
            <div >
                <Button raised color="primary" onClick={ this.getPrevPost }>Get Previous Posts</Button>
                {
                    Boolean(posts.length) && Boolean(tenPosts) ?
                        <ul> 
                            <li>{post}</li>
                        </ul>
                    :
                    <b>Посты еще не подгрузились</b>
                }
                    
                <Button raised color="primary" onClick={ this.getPostsClick }>Get Next Posts</Button>
             
            </div>  
            )

    }

}

const mapStateToProps = (state) => ({
    posts: state.posts,
    keys: state.keys
});

const mapDispatchToProps = (dispatch) =>({
    action: bindActionCreators({ ...postActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



