import React from 'react';


const Hero = (props) => {
  return (
    <div className ="big-div">
      {props.heroData.map((hero, index) => {
        var divToHide = document.getElementsByClassName('hero-details')[0];
        var healthProp = (props.questionFocus)
        var difficultyProp = (props.difficultyFocus)
        if (healthProp == hero.health || difficultyProp == hero.difficulty) {
        divToHide.style.display = 'hidden';
        // console.log(index)
        } else {
        // console.log(healthProp)
        return (
          <div className="hero-details" key={index} id={index}>
            <h1>{hero.name}</h1>
            <h3>Health: {hero.health}</h3>
            <h3>Difficulty: {hero.difficulty}</h3>
          </div>
          )
        }})}
    </div>


    )
}










export default Hero;