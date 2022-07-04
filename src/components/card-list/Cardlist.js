import { Component } from "react";
import Card from "../card/Card";
import './card-list.css'

class Cardlist extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default Cardlist;
