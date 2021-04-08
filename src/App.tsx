
import React, { Component } from 'react'

import { connect } from 'react-redux'
import './App.css';
import { TodoTypes } from './redux/action'; 
import {StoreState} from './redux/reducers/'
import {FetchData} from './redux/action/index'

interface AppProps {
  todos:TodoTypes[];
  FetchData: any;
}



 class _App extends Component<AppProps> {
  onClick=():void=>{
    this.props.FetchData()
  }
  renderList():JSX.Element[]{
     return this.props.todos.map((todo:TodoTypes)=>{
       return <div key={todo.id}>{todo.title}</div>
     })
  }
  render() {
    return (
      <div>
         <button onClick={this.onClick}>Fecth todos</button>
        {this.renderList()}
      </div>
    ) 
  }
}

const mapStateToProps = ({todos} : StoreState):{todos:TodoTypes[]} => {
  return {todos}

}


export  const App = connect(mapStateToProps, {FetchData})(_App)
