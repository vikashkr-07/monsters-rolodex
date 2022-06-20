import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    console.log("constructor")
    super();
    this.state = {
      monsters : [],
    }
  }

  componentDidMount() {
    console.log("did mount")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    // .then(user => this.setState({monsters: user}))
    .then(user => this.setState(
      ()=>{
        return {monsters : user}
      },
      ()=>{
        console.log(this.state.monsters);
      }
    ))
  }
 render(){
   console.log("render");
  return (
    <div className="App">

      <input className='search-box' type='search' placeholder='Search monsters'
        onChange={(event)=>{
           const searchName = event.target.value.toLowerCase();
           const filteredMonsters = this.state.monsters.filter((monster)=>{
           return monster.name.toLowerCase().includes(searchName);
        })
        this.setState(()=>{
          return {monsters : filteredMonsters}
        })
      }}
      />

      {
        this.state.monsters.map(monster=>{
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
