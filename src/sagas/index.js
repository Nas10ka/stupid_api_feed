//Core 
import { all } from 'redux-saga/effects';

//Instruments
import posts from './posts';

export function* saga() {
    yield all ([
        // эффект all принимает массив с вотчерами
        posts.fetchPostsWatcher(),
        posts.updatePostsWatcher(),
    ])
}