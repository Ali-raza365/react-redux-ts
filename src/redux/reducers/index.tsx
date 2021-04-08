import {combineReducers} from 'redux'
import { fetchDataAction, TodoTypes } from '../action'
import {fetchDataReducer} from './todos'

export interface StoreState {
     todos: TodoTypes[];
}

export const reducers = combineReducers({
     todos : fetchDataReducer
})