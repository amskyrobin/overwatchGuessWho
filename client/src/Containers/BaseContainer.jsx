import React, { Component } from 'react';
import Hero from '../Components/Hero';
import QuestionOne from '../Components/QuestionOne';


class BaseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {heroData: [], questionFocus: null}
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleSelectChange (event) {
    this.setState({questionFocus: event.target.value});
    console.log(this.state)


  }


  render () {
    return (
    <div>
      <h1>just checking in rendering lol</h1>
      <Hero heroData ={this.state.heroData}
      />
      <QuestionOne 
      heroData ={this.state.heroData}
      handleSelectChange={this.handleSelectChange}

         />
    </div>
    )
  }


}


export default BaseContainer;