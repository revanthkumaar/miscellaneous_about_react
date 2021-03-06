import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*

//state and lifecycle
function time(){
  const element = (
    <div>
      <h1>clock</h1>
      <h2>now the time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'))
}

setInterval(time,1000)

//converting the above code and seggregating it
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}


function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(tick,1000)


//converting a function component to a class Component


class Clock extends React.Component{
  render(){
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

//add local state to a class



class Clock extends React.Component{
  constructor(props){
    super(props); //class components should always call the base contructor with props
    this.state = {date: new Date()}
  }

  render(){
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);









//simplest way of writing a component - "function component"
/*
function Welcome(props){
  return <h1>hello, {props.name} </h1>
}

//class component using ES6 class methods

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// <Welcome/>

function Welcome(props){
  return <h1>hello, this is {props.name} and i am {props.age} old</h1>
}//functionality

const nameOfStudent = "Sara"
const element = <Welcome name="{nameOfStudent}" age="26" />; //UI element of component

ReactDOM.render(
  element,
  document.getElementById('root')
);




/*
function time(){
  const element = (
    <div>
      <h1>clock</h1>
      <h2>now the time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'))
}

setInterval(time,1000)

/*


/* /different ways of creating JSX element
const htmlElement = (
  <h1 className="greeting">Hello</h1>
);

//vs

const htmlElement1 = React.createElement(
  'h1',
  {className:'greeting'},
  'Hello'
);

const htmlElement2 = {
  type:'h1',
  props:{
    className:'greeting',
    children:'hello'
  }
};

*/

/*
const htmlElement = <div className="revanth">React is awesome</div>
const name = "revanth";
const htmlElement = <div className="{name}">React is awesome</div>
//attribute names in JSX follow camel case representation
//attribute values could be variables to be embedded in curly braces
*/
/*calling functions inside JSX
function addition(a,b){
  return a+b;
}
const htmlElement = <h1> Addition result is, {addition(8,9)}</h1>

ReactDOM.render(
  htmlElement,
  document.getElementById('root')
);
*/

/*/pushing a JS variable in to JSX code
const name = 'revanth';
const htmlElement = <h1>hello, {name}</h1>;
ReactDOM.render(
  htmlElement,
  document.getElementById('root')
);

*/

reportWebVitals();
