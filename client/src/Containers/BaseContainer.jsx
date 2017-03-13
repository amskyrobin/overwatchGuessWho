import React, { Component } from 'react';
import Hero from '../Components/Hero';
import QuestionOne from '../Components/QuestionOne';
import QuestionTwo from '../Components/QuestionTwo';
import Guess from '../Components/Guess';


class BaseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {heroData: [], questionFocus: null, difficultyFocus: null, win: null}
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSecondQuestionChange = this.handleSecondQuestionChange.bind(this)
  }

  componentDidMount () {
    this.getHeroData(this.props.url)
    // this.aWinnerIsYou();
  }

  getHeroData (url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status !== 200) return;{
        var jsonString = request.responseText;
        var heroList = JSON.parse(jsonString);
  
        this.setState({heroData: heroList.data});

        var heroData = this.state.heroData;
        var getWin = heroData[Math.floor(Math.random()*heroData.length)]
        console.log(getWin)
        this.setState({win: getWin})
        console.log("state", this.state.win);
      }
    }
    request.send();
  }

  handleSelectChange (event) {
    this.setState({questionFocus: event.target.value});
    // console.log(this.state)


  }

  handleSecondQuestionChange (event) {
    this.setState({difficultyFocus: event.target.value});
    // console.log(this.state)


  }

  // aWinnerIsYou (){
  //   var heroData = this.getHeroData('https://overwatch-api.net/api/v1/hero')
  //   console.log(this.state.heroData)
  //   var getWin = heroData[Math.floor(Math.random()*heroData.length)]
  //   this.setState({win: getWin})
  // }


  render () {
    return (
    <div>
      <Hero heroData ={this.state.heroData}
      questionFocus={this.state.questionFocus}
      difficultyFocus={this.state.difficultyFocus}
      />
      <QuestionOne 
      heroData ={this.state.heroData}
      handleSelectChange={this.handleSelectChange}

         />

      <QuestionTwo
      heroData ={this.state.heroData}
      handleSecondQuestionChange={this.handleSecondQuestionChange}
      />

    </div>
    )
  }


}


export default BaseContainer;