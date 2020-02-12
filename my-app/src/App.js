import React from 'react';
import axios from 'axios';
import Cards from './Cards';
import './App.css';

class App extends React.Component {
  state = {
    doggos: [],
  };
  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Roberto4Life/following')
      .then(res => {
        console.log('this is res',res);
        // res.data.message
        this.setState({
          doggos: res.data
        });
        
      })
      .catch(err => console.log(err));

  //     .get
  //     .then(response => {
  //       console.log('this is response', response);
  //       this.setState({
  //         doggos: response.data
  //       });
  //   })
  //   .catch(err => console.log(err));
  }

  render() {
    console.log('rendering', this.state.doggos.length);
    return (
      <div className="App-header">
        <h1>Github User Cards</h1>
        <Cards doggos={this.state.doggos} />
      </div>
    )
  }
}

export default App;
