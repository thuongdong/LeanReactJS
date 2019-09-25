import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSeting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this)
    this.onChangSize = this.onChangSize.bind(this)
    this.onSettingDefault = this.onSettingDefault.bind(this)
  }
  onSetColor(params) {
    this.setState({
      color: params,
    })
  }
  onChangSize(value) {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 40) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }
  onSettingDefault(value) {
    if (value) {
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }
  render() {
    return (
      <div className="container mt-100">
        <div className='row'>
          <ColorPicker color={this.state.color} onReceiColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangSize={this.onChangSize} />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
