import React, { Component } from "react";
import { addWord } from "../actions/Words";

class AddComponent extends Component {
  handleAddClick = () => {
    var word = prompt("Add To Dictionary");
    console.log("word", word);
    if (word != "") {
      this.props.dispatch(addWord(word));
    }
  };
  render() {
    return (
      <div className="add-button">
        <img
          onClick={this.handleAddClick}
          src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
          alt="add-word"
        />
      </div>
    );
  }
}

export default AddComponent;
