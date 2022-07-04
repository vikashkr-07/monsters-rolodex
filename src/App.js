import "./App.css";
import { Component } from "react";
import Cardlist from "./components/card-list/Cardlist";
import InputFields from "./components/input-box/InputField";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // console.log("did mount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then(user => this.setState({monsters: user}))
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            // console.log(this.state.monsters);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="monster-title">Monsters Rolodex</h1>

        <InputFields
          onSearchHandler={this.onSearchChange}
          placeholder="search monster"
          className="search-box-monster"
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
