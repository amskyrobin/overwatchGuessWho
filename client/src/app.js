import React from'react';
import ReactDOM from 'react-dom';
import BaseContainer from './Containers/BaseContainer'


window.onload = function(){
  ReactDOM.render(
    <BaseContainer url='https://overwatch-api.net/api/v1/hero'/>,
    document.getElementById('app')
  );
}


