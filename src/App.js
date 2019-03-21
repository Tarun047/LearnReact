import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const list = [{
  title:'React',
  url:'https://reactjs.org/',
  author:'Jordan Walke',
  num_comments:3,
  points:4,
  objectId:0,
},
{
  title:'Redux',
  url:'https://redux.js.org/',
  author:'Dan Abramov, Andrew Clark',
  num_comments:2,
  points:5,
  objectId:1,
},]
function isSearched(searchTerm)
{
  return function(item){
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}
class App extends Component {
  constructor(props)
  {
    super(props);
    //this.state = {list: list,};
    //short hand declarations for objects
    //this.state = {list,};
    //Sample shortHandMethod
    const userService = {
      getUserName(user){
        return user.firstname+' '+user.lastname;
      },
    };
    //Computed Property Names Demonstration
    //Basically Nothing but a dict
    const key = 'name';
    const user = {
      [key]:'Robin',
    };
    this.state = {list,user,searchTerm:""};
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss = (id)=>
  {
    const updatedList = this.state.list.filter(item=>item.objectId!==id);
    this.setState({list:updatedList});
  }
  onSearchChange(event){
    this.setState({searchTerm:event.target.value})
  }
  render() {
    return (
      <div className="App">
      <h2> user name is: {this.state.user['name']}</h2>
      <form>
      <input type="text" onChange={this.onSearchChange}/>
      </form>
      {this.state.list.filter(isSearched(this.state.searchTerm)).map(item=>
          <div key={item.objectId}>
          <span><a href={item.url}>{item.title}</a></span>
          <br/><span>{item.author}</span><br/>
          <span>{item.num_comments}</span><br/>
          <span>{item.points}</span><br/>
          <span>
            <button onClick={()=>this.onDismiss(item.objectId)}
            type="button">Dissmiss</button>
          </span>
          </div>
      )}
      </div>
    );
  }
}

export default App;
