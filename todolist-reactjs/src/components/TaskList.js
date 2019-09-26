import React from 'react';

class TaskList extends React.Component {
  render() {
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
              <tr>
                <th scope="row">1</th>
                <td>Hello</td>
                <td className="text-center">
                  <span className="label-danger">
                    Trang thaii
                          </span>
                </td>
                <td className="text-center">
                  <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5">Sua</span>
                  </button>
                  &nbsp;
                          <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5">Xoa</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
