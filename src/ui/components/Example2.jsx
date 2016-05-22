require('whatwg-fetch');

const React = require('react');

const Example1 = require('./Example1');

class Example2 extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.string,
    validValues: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  static defaultProps = {
    defaultValue: 'default',
    validValues: ['123', 'test', 'hello'],
  }

  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateText = this.updateText.bind(this);
    this.validate = this.validate.bind(this);
  }

  state = {
    form: {
      text: this.props.defaultValue,
    },
    isValid: true,
  }

  // @TODO: Find a better way to validate only on the client-side
  componentWillMount() {
    if (global.document) {
      const isValid = this.validate(this.state.form.text);
      if (isValid !== this.state.isValid) {
        this.setState(Object.assign({}, this.state, { isValid }));
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.isValid) {
      return false;
    }

    const body = JSON.stringify(this.state.form);
    return fetch('/', { body, method: 'POST', headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not submit form. Status code: ${response.status}`);
        }
        window.location.href = `/success?formData=${encodeURIComponent(body)}`;
      })
      .catch((err) => {
        window.location.href = `/failure?error=${encodeURIComponent(err)}`;
      });
  }

  updateText(e) {
    const text = e.target.value;
    this.setState({ form: { text }, isValid: this.validate(text) });
  }

  validate(text) {
    return Boolean(text && this.props.validValues.indexOf(text) > -1);
  }

  render() {
    return (
      <Example1
        onSubmit={this.onSubmit}
        updateText={this.updateText}
        isValid={this.state.isValid}
        defaultValue={this.state.form.text}
      />
    );
  }
}

module.exports = Example2;
