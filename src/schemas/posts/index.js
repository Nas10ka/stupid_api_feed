//Core 
import { schema } from 'normalizr';

// const post = new schema.Entity('posts');
// const postsSchema = new schema.Array(post);
const post = new schema.Entity('posts', {}, {idAttribute: '_id'});
const postsSchema = new schema.Array(post);

 export default postsSchema;