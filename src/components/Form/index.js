import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import './style.css';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-field">
          <Input
            onChange={this.onChangeHandler}
            value={value}
          />
          <Button
            toUpperCase
            title="add"
            type="submit"
          />
        </div>
      </form>
    );
  }

  submitHandler = (ev) => {
    const { value } = this.state;
    const { nextItemId } = this.props;
    ev.preventDefault();
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit({
        completed: false,
        id: nextItemId,
        title: value,
      });
      this.setState({ value: '' });
    }
  };

  onChangeHandler = (ev) => {
    const { target: { value } } = ev;
    this.setState({ value });
  }
}

export default Form;
