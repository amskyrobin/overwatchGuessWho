import React, { Component } from 'react';
import Hero from '../Components/Hero';


class BaseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {heroData: []}
  }

  componentDidMount () {
    this.getHeroData(this.props.url)
  }

  getHeroData (url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status !== 200) return;{
        var jsonString = request.responseText;
        var heroList = JSON.parse(jsonString);
  
        this.setState({heroData: heroList.data});
        console.log("state", this.state.heroData);
      }
    }
    request.send();
  }


  render () {
    return (
    <div>
      <h1>just checking in rendering lol</h1>
      <Hero heroData ={this.state.heroData}
      />
    </div>
    )
  }


}


export default BaseContainer;