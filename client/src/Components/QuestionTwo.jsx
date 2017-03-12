import React from 'react';


const QuestionTwo = (props) => {
    // var option = document.getElementsByClassName('question-one-select');

    // [].slice.call(option).map((item, index){
    //   if(this.item.innerText){
    //     option.removeChild(item);
    //   } else {
    //     this[item.innerText]=1
    //   }
    // });



 
  return (
    <div>
    <h1>In what range is their difficulty level?</h1>
    <select className="question-two-select" onChange={props.handleSecondQuestionChange}>
      {props.heroData.map((hero, index) => { 

        return (

          <option className="hero-question-two" key={index} id={index} value={hero.difficulty}>
          {hero.difficulty}
          </option>
          )
        })}
    </select>
    </div>
    )
}

export default QuestionTwo;