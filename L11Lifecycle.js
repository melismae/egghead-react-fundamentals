import React from 'react';
import ReactDOM from 'react-dom';

//class-based syntax
class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      increasing: false
    }
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('app')
    );
    // this.setState({
    //   val: this.state.val + 1
    // })
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.setState({
      increasing: nextProps.val > this.props.val
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    //this allows you to optimize rerendering
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    //the props & state are updated even tho the component is NOT being re-rendered
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  render() {
    console.log(this.state.increasing);
    return (
        <button onClick={this.update}>{this.props.val}</button>
    )
  }
}

App.defaultProps = { val: 0 }

// class Wrapper extends React.Component {
//   constructor() {
//     super();
//   }
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }

export default App;
