import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm()
  }
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    if (name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.onClear()
    this.onCloseForm()
  }
  onClear = () => {
    this.setState ({
      name: '',
      status: false
    })
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Them cong viec
            <span className="far fa-times-circle" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Ten: </label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
            </div>
            <label>Trang thai: </label>
            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
              <option value={true}>Kich hoat</option>
              <option value={false}>An</option>
            </select> <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="">Luu</span>
              </button> &nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onClear}>
                <span className="">Huy</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
