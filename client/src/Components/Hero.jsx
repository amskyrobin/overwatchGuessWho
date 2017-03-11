import React from 'react';


const Hero = (props) => {

  return (
    <div>
      {props.heroData.map((hero, index) => {
        return (
          <h1 key={index}>{hero.name}</h1>
          )
        })}
    </div>

    )
}










export default Hero;