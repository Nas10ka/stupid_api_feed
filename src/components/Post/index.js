import React, {Component} from 'react'
import { object, string } from 'prop-types';
import { v4 } from 'uuid';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
// components
import PostKey from '../PostKey';
import PostImg from '../PostImg';
import Styles from './styles';


export default class Post extends Component {
    constructor(props) {
        super()
    };

    render() {
        console.log('post props',this.props);
        const {web_url, snippet, lead_paragraph,
            abstract, print_page, blog, source,
            multimedia, headline, keywords, pub_date,
            document_type, news_desk, section_name,
            subsection_name, byline, type_of_material,
            _id, word_count, slideshow_credits
        } = this.props;
        const postKeys = this.props.objKeys;
        console.log('postKeys', postKeys);

        const post_link = `/${_id}`;
        const img = multimedia.map((props) => {
            return <PostImg key = { v4() } { ...props }/>
        });

        const date = pub_date.substring(0, 10);

         return (
               <li className= { Styles.post } key = { v4() }>
               <Card>
               <CardContent>
                   
               <span>{img[1]}</span>
                <Typography component="p">
                {lead_paragraph}
                </Typography>
                 </CardContent>
        
                    <CardActions>
                        <Link to = {post_link}>
                    <Button size="small" color="primary">
                        Read more...
                    </Button>
                    </Link>
                    <a href={web_url}>
                        <Button size="small" color="primary">
                            Visit site
                        </Button>
                    </a>
                    </CardActions>
               </Card>
               {/* <p>{date}</p> */}
               </li>
        )
    }
}