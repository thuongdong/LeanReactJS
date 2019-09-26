import React from 'react';

class TaskForm extends React.Component {
  render() {

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Them cong viec
            <i className="far fa-times-circle"></i>
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
