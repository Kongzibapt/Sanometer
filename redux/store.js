import {createStore} from 'redux';
import chapter1Reducer from './chapter1Reducer';

const store = createStore(chapter1Reducer);

export default store;