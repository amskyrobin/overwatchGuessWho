import React from 'react';


const QuestionOne = (props) => {
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
    <h1>In what range is their health?</h1>
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