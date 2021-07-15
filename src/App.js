/* eslint-disable no-useless-constructor */
/* eslint-disable no-eval */
/* eslint-disable no-lone-blocks */

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      type:[{name:'groceries',list:[]},{name:'basket',list:[]}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addGor = this.addGor.bind(this);
    this.subGor = this.subGor.bind(this);
  }

  handleChange (e) {
    const { value } = e.target;
    const { type } = this.state;
    this.setState({
      input:value,
      type:type
    })
  }

  addGor (e,list,item) {
    e.preventDefault();
    const { type } = this.state;
    const newType = type;
    const newObjb = newType.find(obj => obj.name ==='basket')
   const currObj = newObjb.list.find(obj => obj.name === item)
   if(currObj) {
     currObj.count ++
   } else {
     newObjb.list.push({name:item,count:1})
   }
   this.setState({
     type:[...newType]
   })
  }

  subGor (e,list,item) {
    e.preventDefault();
    const { type } = this.state;
    const newType = type;
    const newObjb = newType.find(obj => obj.name ==='basket')
    console.log(newObjb)
    const currObj = newObjb.list.find(obj => obj.name === item.name)
    console.log(currObj);
    if(currObj && currObj.count > 1) {
     currObj.count --
   } else {
     newObjb.list = newObjb.list.filter(obj => obj.name !== item.name )
   }
   this.setState({
     type:[...newType]
   })
  }

  addItem (e) {
    e.preventDefault();
    const { input,type } = this.state;
    const newObjg = type.find(obj => obj.name==='groceries')
    if (input && !newObjg.list.includes(input)) {
      newObjg.list.push(input)
    }
    this.setState({
      input:'',
      type:[...type]
    })
    document.getElementById('items').value = ''
  }
  
  render () {
    const { type } = this.state;
    return (
      <div className='contain'>
        <header>Hello,Basket!</header>
        <div>
          <form>
            <label for='items'>Search/Add Item:</label>
            <input onChange={this.handleChange} id='items' type='text' name='items'></input> <br></br>
            <button onClick={this.addItem}>Add</button>
          </form>
        </div>
        <div className='lists'>
          {type.map((item,i) => 
            <List key={item+i} subGor={this.subGor} addGor={this.addGor} name={item.name} list={item.list}/>
          )}
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
    const { subGor,addGor,name,list } = this.props;
    if (name==='groceries') {
      return (
      <div className='list'>
        <div><i className='fas fa-leaf'><h3>{name}</h3></i></div>
        <div  class='items'>
          {list.map((item,i)=> 
            <button key={item+i} onClick={
              (e)=>{addGor(e,list,item)}
            }><i className='fas fa-plus-circle'></i>{item}</button>
          )}
        </div>
      </div>
    )
    } else {
      return (
      <div className='list'>
        <div><i className='fas fa-shopping-basket '><h3>{name}</h3></i></div>
          <div class='items'>
            {list.map((item,i)=>
              <button key={item+i} onClick={
              (e)=>{subGor(e,list,item)}
            }><i className='fas fa-minus-circle'>{`  ${item.count}  ${item.name}`}</i></button>
          )}
          </div>
      </div>
    )
    }
  }
}



export default App;
