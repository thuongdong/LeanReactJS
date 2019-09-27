import React from 'react';

class Sort extends React.Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sap xep
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="a.com" role="button">
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li>
              <a href="a.com" role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li>
              <a href="a.com" role="button">
                Trang thai an
              </a>
            </li>
            <li>
              <a href="a.com" role="button">
                Trang thai hien
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
