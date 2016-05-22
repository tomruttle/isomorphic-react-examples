const React = require('react');

const noop = () => {};

const Example1 = (props) => {
  const {
    defaultValue = 'default',
    isValid = true,
    onSubmit = noop,
    updateText = noop,
  } = props;

  return (
    <form action="/" method="post" onSubmit={onSubmit} className="form-horizontal">
      <h3>A Simple Form</h3>
      <div className={`form-group${isValid ? '' : ' has-error'}`}>
        <label className="col-sm-2 control-label" htmlFor="text">Please input some text:</label>
        <div className="col-sm-10">
          <input
            required
            type="text"
            className="form-control"
            name="text"
            value={defaultValue}
            onChange={updateText}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default" disabled={!isValid}>SUBMIT</button>
        </div>
      </div>
    </form>
  );
};

Example1.propTypes = {
  defaultValue: React.PropTypes.string,
  isValid: React.PropTypes.bool,
  onSubmit: React.PropTypes.func,
  updateText: React.PropTypes.func,
};

module.exports = Example1;
