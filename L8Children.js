import React from 'react';

//class-based syntax
class App extends React.Component {
  render() {
    return (<div>
      <Button>I <Heart /> React</Button>
    </div>)
  }
}

class Button extends React.Component {
  render() {
    //will console out an object of what's passed into the <Button /> above
    console.log(this.props.children);

    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>;

export default App;
