import React from 'react';


const Hero = (props) => {
  return (
    <div>
      {props.heroData.map((hero, index) => {
        var healthProp = (props.questionFocus)
        var difficultyProp = (props.difficultyFocus)
        if (healthProp == hero.health || difficultyProp == hero.difficulty) {
        return <div></div>
        // console.log(index)
        } else {
        // console.log(healthProp)
        return (
          <div className="hero-details" key={index} id={index}>
            <h1>{hero.name}</h1>
            <h3>{hero.health}</h3>
            <h3>{hero.difficulty}</h3>
          </div>
          )
        }})}
    </div>


    )
}










export default Hero;