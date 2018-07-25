import React from 'react';

export default class InputText extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item.value,
      isRead: true
    };
  }

  changeInputRead = () => {
    const { isRead } = this.state;

    this.setState({
      isRead: !isRead
    });
  };

  changeValue = e => {
    const value = e.target.value;

    this.setState({
      value
    });

    this.props.modifyValue(value);
  };

  render() {
    const { value, isRead } = this.state;

    return (
      <input
        type="text"
        className="form-control-plaintext"
        value={value}
        readOnly={isRead}
        onDoubleClick={this.changeInputRead}
        onChange={this.changeValue}
        onBlur={this.changeInputRead}
      />
    );
  }
}
