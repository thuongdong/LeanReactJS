import React from 'react';

class TaskForm extends React.Component {
  onCloseForm = () => {
    this.props.onCloseForm()
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
          <form>
            <div className="form-group">
              <label>Ten: </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <label>Trang thai: </label>
            <select className="form-control" name="" id="">

            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
