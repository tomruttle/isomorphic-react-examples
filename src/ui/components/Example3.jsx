require('whatwg-fetch');

const React = require('react');

const Example2 = require('./Example2');

class Example3 extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.string,
    validValues: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  state = {
    text: this.props.defaultValue,
  }

  // @TODO This is ugly. ISN'T THERE A BETTER WAY???
  componentWillMount() {
    if (global.document) {
      const text = global.document.getElementsByName('text')[0].value;
      if (text !== this.state.text) {
        this.setState({ text });
      }
    }
  }

  render() {
    return (
      <Example2
        defaultValue={this.state.text}
        validValues={this.props.validValues}
      />
    );
  }
}

module.exports = Example3;
