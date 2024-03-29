import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'blue', 'yellow', 'black']
    }
  }
  showColor(color) {
    return {
      backgroundColor: color
    }
  }
  setColor(color) {
    this.props.onReceiColor(color)
  }
  render() {
    var elementColor = this.state.colors.map((color, index) => {
      return <span
        className={this.props.color === color ? 'active' : ''}
        key={index}
        style={this.showColor(color)}
        onClick={() => { this.setColor(color) }}
      >
      </span>
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            <hr />
            {elementColor}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
