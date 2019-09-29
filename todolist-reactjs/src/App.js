import React from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }
  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }
  onGenateData = () => {
    var tasks = [
      {
        id: this.guid(),
        name: 'Hello',
        status: true
      },
      {
        id: this.guid(),
        name: 'Hi',
        status: false
      },
      {
        id: this.guid(),
        name: 'My name is T',
        status: true
      }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  // Random id
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  render() {
    var { tasks, isDisplayForm } = this.state //var tasks = this.state.tasks
    var elementForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} /> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1><hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elementForm}
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fas fa-plus mr-5"></span>Them cong viec
            </button>
            &nbsp;<button type="button" className="btn btn-warning" onClick={this.onGenateData}>
              Them cong viec
            </button>
            <Control />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
