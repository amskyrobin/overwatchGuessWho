import React from 'react';


const QuestionOne = (props) => {

 
  return (
    <div>
    <h1>In what range in their health?</h1>
    <select className="question-one-select" onChange={props.handleSelectChange}>
      {props.heroData.map((hero, index) => {
        return (
          <option className="hero-question-one" key={index} id={index} value={hero.health}>
          {hero.health}
          </option>
          )
        })}
    </select>
    </div>
    )
}










export default QuestionOne;