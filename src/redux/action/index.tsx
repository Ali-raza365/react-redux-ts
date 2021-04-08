import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

 const url ='https://jsonplaceholder.typicode.com/todos'
 
 export interface TodoTypes {
      id : number;
      title: number;
      completed: boolean;
      userId: number;
 }
export  interface fetchDataAction {
     type:ActionTypes.FetchData; 
     payload : TodoTypes[];

}

export const FetchData=()=> async(dispatch:Dispatch)=>{
      const resp = await   axios.get<TodoTypes[]>(url)

      dispatch<fetchDataAction>({
           type: ActionTypes.FetchData,
           payload:resp.data
      })
}