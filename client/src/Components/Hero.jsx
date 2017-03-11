import React from 'react';


const Hero = (props) => {

  const heroes = props.heroData.map(function(hero, index){
    return (
      <div className='overwatchHero'>
      <h1>{hero.name}</h1>
      </div>  
      );

    return (
      <div>
        {heroes}
      </div>
      )

  });
}








export default Hero;