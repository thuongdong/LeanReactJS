import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    var { tasks } = this.props
    var elementTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />
    })
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Ten</th>
                <th className="text-center">Trang thai</th>
                <th className="text-center">Hanh dong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control" name="filterName" />
                </td>
                <td>
                  <select className="form-control" name="filterStatus">
                    <option value={-1}>Tat ca</option>
                    <option value={0}>An</option>
                    <option value={1}>Hien</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elementTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
