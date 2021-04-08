import {TodoTypes,fetchDataAction} from '../action'
import { ActionTypes } from '../action/types'

export const fetchDataReducer =(state :TodoTypes[] =[],action:fetchDataAction)=>{

     switch (action.type) {
          case ActionTypes.FetchData:
               return action.payload
          default:
               return state;
     }
}