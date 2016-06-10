import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    //your dope data set
    this.state = {
      data: [
        {
          id: 1,
          name: "Smarf"
        },
        {
          id: 2,
          name: "Hot Dog"
        },
        {
          id: 3,
          name: "Taco Bell"
        },
        {
          id: 4,
          name: "Tommy Wiseau"
        },
        {
          id: 5,
          name: "Lavendar Gooms"
        },
        {
          id: 6,
          name: "Jazz Hands"
        },
        {
          id: 7,
          name: "Mr. Wilson"
        },
      ]
    }
  }

  update(e) {
    this.setState({
    })
  }
  render() {
    let rows = this.state.data.map( person => {
      //must return a key
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <div>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App;
