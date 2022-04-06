import React from 'react';
import axios from 'axios';
//function App() {
class App extends React.Component{
  state = {
    title: '',
    body:  ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url: '/api/save',
      method: 'POST',
      //beforeSend: function(xhr){
      //  xhr.overrideMimeType('application/xml');
    //  },
      data: payload
    })
    .then(() => {
      console.log('data has been sent');
    })
    .catch(() => {
      console.log('server error');
    });;
  }

render(){

  console.log('State: ',this.state );
  return (
    <div>
      <h2>Welcome to my App</h2>
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
            type="text"
            name="title"
            placeholder='enter title'
            value={this.state.title}
            onChange={this.handleChange}
            />
        </div>
        <div className='form-input'>
          <textarea 
          placeholder='body' 
          name="body" cols="30" 
          rows="10" 
          value={this.state.body} 
          onChange={this.handleChange}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
}
export default App;
