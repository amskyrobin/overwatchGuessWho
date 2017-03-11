import React from 'react';


const Hero = (props) => {

  return (
    <div>
      {props.heroData.map((hero, index) => {
        return (
          <div className="hero-details" key={index} id={index}>
            <h1>{hero.name}</h1>
          </div>
          )
        })}
    </div>

    )
}










export default Hero;