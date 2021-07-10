/* eslint-disable no-useless-constructor */
/* eslint-disable no-eval */
/* eslint-disable no-lone-blocks */

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries:[],
      basket:[]
    }
    
  }
  
  render () {
    return (
      <div className='contain'>
        <header>Hello,Basket!</header>
        <div>
          <form>
            <label>Search/Add Item:</label>
            <input></input>
            <button>Search</button>
            <button>Add</button>
          </form>
        </div>
        <div className='lists'>
          <List />
        </div>
      </div>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
    const { name,list } = this.props;
    if (name==='groceries') {
      return (
      <div>
        <div><i className='fas fa-leaf'></i>{name}</div>
        <div>
          {list.map((item,i)=> {
            return (
              <div><button><i className='fas fa-plus-circle'></i></button></div>
            )
          })}
        </div>
      </div>
    )
    } else {
      return (
      <div>
        <div><i className='fas fa-basket'></i>{name}</div>
        <div>
          {list.map((item,i)=> {
            return (
              <div><button><i className='fas fa-minus-circle'></i></button></div>
            )
          })}
        </div>
      </div>
    )
    }
  }
}



export default App;