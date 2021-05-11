import './App.css'
import './tachyons.css';
import Cats from './component/Cats'
import Search from './component/Search'
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
        cats : [],
        newCatList : []
    }
  }

  componentDidMount() {
      document.title = 'Cat Friends';
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {this.setState({ cats: json, newCatList: json })} 
      );
  }
  
  onSearchChange = (event) => {
    const newCatLists = this.state.cats.filter( cat => {
      return cat.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    this.setState({ newCatList: newCatLists })
  }

  render(){
    return (
      <div className='tc'>
        <h1 className='f1'>Cat Friends</h1>
        <Search searchchange={this.onSearchChange} />
        <br/>
        <div className='pa2'>
          <Cats catlist={this.state.newCatList} />
        </div>
      </div>
    );
  }
}

export default App;
