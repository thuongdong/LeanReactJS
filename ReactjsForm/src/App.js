import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  onHandleChange(event) {
    var target = event.target
    var name = target.name // name: username, password
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  // event.preventDefault() block out submit event 
  onHandleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <legend>Form title</legend>
                  <div className="form-group">
                    <label>Username: </label>
                    <input type="text" className="form-control" name="username" onChange={this.onHandleChange} />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" name="password" onChange={this.onHandleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" className="btn btn-warning">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
