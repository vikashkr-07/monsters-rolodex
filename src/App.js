import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: "",
    }
  }

  componentDidMount() {
    // console.log("did mount")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    // .then(user => this.setState({monsters: user}))
    .then(user => this.setState(
      ()=>{
        return {monsters : user}
      },
      ()=>{
        // console.log(this.state.monsters);
      }
    ))
  }

  onSearchChange = (event)=>{
     const searchField = event.target.value.toLowerCase();
     this.setState(
      ()=>{
        return {searchField}
      }
     )
  }

 render(){

  const {monsters, searchField} = this.state;
  const {onSearchChange} = this;

  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='Search monsters'
        onChange={onSearchChange} />
      {
        filteredMonsters.map(monster=>{
         return <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
        })
      }
    </div>
  );
 }
}

export default App;
