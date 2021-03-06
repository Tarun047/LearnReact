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

const Search = ({value,onChange,children})=>
<form>
{children}:<input
 type="text"
 value={value}
 onChange = {onChange}
 />
 </form>
const largeColumn = {width:'40%'};
const midColumn = {width:'30%'};
const smallColumn = {width:'10%'};

 const Table = ({list,pattern,onDismiss})=><div className="table">
 {list.filter(isSearched(pattern)).map(item=>
       <div key={item.objectId} className="table-row">
       <span style={largeColumn}><a href={item.url}>{item.title}</a></span>
       <span style={midColumn}>{item.author}</span>
       <span style={smallColumn}>{item.num_comments}</span>
       <span style={smallColumn}>{item.points}</span>
       <span>
         <Button onClick={()=>onDismiss(item.objectId)} className="button-inline">Dismiss</Button>
       </span>
       </div>
   )}
 </div>

 const Button = ({onClick,className="",children})=>
 <button
   onClick={onClick}
   className={className} type="button">
 {children}
 </button>

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {list,searchTerm:""};
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
    const {searchTerm, list} = this.state;
    return (
      <div className="page">
      <div className="interactions">
      <Search
        value = {searchTerm}
        onChange = {this.onSearchChange}>Search</Search>
      </div>
      <Table
        list = {list}
        pattern = {searchTerm}
        onDismiss = {this.onDismiss}/>

      </div>
    );
  }
}
export default App;
