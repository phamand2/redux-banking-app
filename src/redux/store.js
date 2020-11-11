import { createStore } from 'redux';
import {accountReducer} from './reducers'



export const store = createStore(accountReducer);