import React, { Component } from "react";
import axios from "axios";
import './memeGen.css'
export default class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    allMemeImg: []
  };
  componentDidMount = async () => {
    let res = await axios.get("https://api.imgflip.com/get_memes");
    const { memes } = res.data.data;
    this.setState({
      allMemeImg: memes
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  gen = (e) => {
    e.preventDefault();
    let rNo = Math.floor(Math.random() * (this.state.allMemeImg.length - 0));
    this.setState({
        randomImage: this.state.allMemeImg[rNo].url
    })
  }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.gen}>
          <input
            type="text"
            placeholder="top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="top text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>GEN</button>
          {this.state.topText}
        </form>
        <div className="meme">
            <img src={this.state.randomImage} alt=""/>
            <h1 className="top">{this.state.topText}</h1>
            <h1 className="bottom">{this.state.bottomText}</h1>
        </div>
        {this.state.randomImage}
      </div>
    );
  }
}
